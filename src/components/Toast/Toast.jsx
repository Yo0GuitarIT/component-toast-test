import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useToast } from "./ToastContext";

function Toast() {
    const { activeToast, hideToast } = useToast();

    if (!activeToast) return null;

    const { message, severity, time, vertical, horizontal, key } = activeToast;

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        hideToast();
    };

    const handleExited = () => {
        hideToast();
    };

    return (
        <Snackbar
            key={key}
            open={Boolean(activeToast)}
            autoHideDuration={time}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            TransitionProps={{ onExited: handleExited }}
        >
            <Alert onClose={handleClose} severity={severity} variant='filled' sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
