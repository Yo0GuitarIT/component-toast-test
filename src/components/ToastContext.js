import { useContext, createContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        severity: "info",
        vertical: "top",
        horizontal: "center",
        time: 3000,
    });

    const showToast = (config) => {
        setToast((prevToast) => ({
            ...prevToast,
            open: true,
            ...config,
        }));
    };

    const hideToast = () => {
        setToast((prevToast) => ({
            ...prevToast,
            open: false,
        }));
    };

    return <ToastContext.Provider value={{ toast, showToast, hideToast }}>{children}</ToastContext.Provider>;
};
