import React from "react";
import { Alert, Snackbar, Slide } from "@mui/material";
import { useToast } from "./ToastContext";

function SlideTransition(props) {
    return <Slide {...props} />;
}

function Toast() {
    const { toast, hideToast } = useToast();
    const { open, message, severity, time, vertical, horizontal, slideDirection } = toast;

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        hideToast();
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={time}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            TransitionComponent={SlideTransition}
            TransitionProps={{ direction: slideDirection }}
        >
            <Alert onClose={handleClose} severity={severity} variant='filled' sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
