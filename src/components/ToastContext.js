import { useContext, createContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

const toastConfigs = {
    success: { severity: "success", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
    warning: { severity: "warning", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
    error: { severity: "error", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
    info: { severity: "info", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
};

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        severity: "info",
        vertical: "top",
        horizontal: "center",
        time: 3000,
        slideDirection: "down",
    });

    const showToast = (type, message, customConfig = {}) => {
        const config = { ...toastConfigs[type], message, ...customConfig };
        setToast({ ...config, open: true });
    };

    const hideToast = () => {
        setToast((prevToast) => ({
            ...prevToast,
            open: false,
        }));
    };

    const contextValue = {
        toast,
        showToast,
        hideToast,
        success: (message, customConfig) => showToast("success", message, customConfig),
        warning: (message, customConfig) => showToast("warning", message, customConfig),
        error: (message, customConfig) => showToast("error", message, customConfig),
        info: (message, customConfig) => showToast("info", message, customConfig),
    };
    return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};
