export const DEFAULT_TOAST_CONFIG = {
    vertical: "top",
    horizontal: "center",
    time: 2000,
};

export const toastConfigs = {
    success: { severity: "success", ...DEFAULT_TOAST_CONFIG },
    warning: { severity: "warning", ...DEFAULT_TOAST_CONFIG },
    error: { severity: "error", ...DEFAULT_TOAST_CONFIG },
    info: { severity: "info", ...DEFAULT_TOAST_CONFIG },
};
