import { useCallback, useEffect, useState } from "react";
import ToastContext from "./ToastContext";
import Toast from "./Toast";
import { toastConfigs } from "./constants";

export const ToastProvider = ({ children }) => {
    const [toastQuene, setToastQuene] = useState([]);
    const [activeToast, setActiveToast] = useState(null);

    useEffect(() => {
        if (toastQuene.length && !activeToast) {
            setActiveToast(toastQuene[0]);
            setToastQuene((prev) => prev.slice(1));
        }
    }, [toastQuene, activeToast]);

    const showToast = useCallback((type, message, customConfig = {}) => {
        const config = { ...toastConfigs[type], message, ...customConfig };
        setToastQuene((prev) => [...prev, { ...config, key: new Date().getDate() }]);
    }, []);

    const hideToast = useCallback(() => {
        setActiveToast(null);
    }, []);

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
