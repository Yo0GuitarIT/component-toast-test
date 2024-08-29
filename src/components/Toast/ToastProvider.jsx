import { useCallback, useEffect, useReducer } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "./Toast";
import { toastConfigs, DEFAULT_TOAST_CONFIG } from "./constants";

const toastReducer = (state, action) => {
    switch (action.type) {
        case "ENQUEUE_TOAST":
            return { ...state, queue: [...state.queue, action.payload] };
        case "DEQUEUE_TOAST":
            return { ...state, activeToast: state.queue[0], queue: state.queue.slice(1) };
        case "HIDE_TOAST":
            return { ...state, activeToast: null };
        default:
            return state;
    }
};

export const ToastProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, { queue: [], activeToast: null });

    useEffect(() => {
        if (state.queue.length && !state.activeToast) {
            dispatch({ type: "DEQUEUE_TOAST" });
        }
    }, [state.queue, state.activeToast]);

    const showToast = useCallback((type, message, customConfig = {}) => {
        const config = { ...DEFAULT_TOAST_CONFIG, ...toastConfigs[type], message, ...customConfig };
        dispatch({ type: "ENQUEUE_TOAST", payload: { ...config, key: new Date().getTime() } });
    }, []);

    const hideToast = useCallback(() => {
        dispatch({ type: "HIDE_TOAST" });
    }, []);

    const contextValue = {
        activeToast: state.activeToast,
        showToast,
        hideToast,
        success: (message, customConfig) => showToast("success", message, customConfig),
        warning: (message, customConfig) => showToast("warning", message, customConfig),
        error: (message, customConfig) => showToast("error", message, customConfig),
        info: (message, customConfig) => showToast("info", message, customConfig),
    };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <Toast />
        </ToastContext.Provider>
    );
};
