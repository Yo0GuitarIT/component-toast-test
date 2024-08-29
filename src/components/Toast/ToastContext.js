import { useContext, createContext, useState, useEffect } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

const toastConfigs = {
    success: { severity: "success", vertical: "top", horizontal: "center", time: 500 },
    warning: { severity: "warning", vertical: "top", horizontal: "center", time: 500 },
    error: { severity: "error", vertical: "top", horizontal: "center", time: 500 },
    info: { severity: "info", vertical: "top", horizontal: "center", time: 500 },
};

export const ToastProvider = ({ children }) => {
    const [toastQueue, setToastQueue] = useState([]);
    const [activeToast, setActiveToast] = useState(null);

    useEffect(() => {
        if (toastQueue.length && !activeToast) {
            setActiveToast(toastQueue[0]);
            setToastQueue((prev) => prev.slice(1));
        }
    }, [toastQueue, activeToast]);

    const showToast = (type, message, customConfig = {}) => {
        const config = { ...toastConfigs[type], message, ...customConfig };
        setToastQueue((prev) => [...prev, { ...config, key: new Date().getTime() }]);
    };

    const hideToast = () => {
        setActiveToast(null);
    };

    const contextValue = {
        activeToast,
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
