import { useToast } from "./ToastContext";

export const useCustomToast = () => {
    const { showToast } = useToast();

    const toastConfigs = {
        success: { severity: "success", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
        warning: { severity: "warning", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
        error: { severity: "error", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
        info: { severity: "info", vertical: "top", horizontal: "center", time: 3000, slideDirection: "down" },
    };

    const customToast = (type, message, customConfig) => {
        const config = { ...toastConfigs[type], message, ...customConfig };
        showToast(config);
    };

    return {
        success: (message, customConfig) => customToast("success", message, customConfig),
        warning: (message, customConfig) => customToast("warning", message, customConfig),
        error: (message, customConfig) => customToast("error", message, customConfig),
        info: (message, customConfig) => customToast("info", message, customConfig),
    };
};
