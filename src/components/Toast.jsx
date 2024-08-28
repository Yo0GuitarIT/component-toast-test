import React, { useMemo } from "react";
import { Alert, Snackbar, Slide } from "@mui/material";
import { useToast } from "./ToastContext";

const getSlideDirection = (severity) => {
    switch (severity) {
        case "success":
            return "right";
        case "warning":
            return "down";
        case "error":
            return "left";
        default:
            return "down";
    }
};

function Toast() {
    const { toast, hideToast } = useToast();
    const { open, message, severity, time, vertical, horizontal } = toast;

    const SlideTransition = useMemo(() => {
        return React.forwardRef((props, ref) => <Slide {...props} direction={getSlideDirection(severity)} ref={ref} />);
    }, [severity]);

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
        >
            <Alert
                onClose={handleClose}
                severity={severity === "default" ? "info" : severity}
                variant='filled'
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
