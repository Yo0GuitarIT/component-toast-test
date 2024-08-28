import React, { useMemo } from "react";
import { Alert, Snackbar, Slide } from "@mui/material";

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

function Toast({
    open,
    handleClose,
    message,
    severity,
    time,
    vertical,
    horizontal,
}) {
    const SlideTransition = useMemo(() => {
        return React.forwardRef((props, ref) => (
            <Slide
                {...props}
                direction={getSlideDirection(severity)}
                ref={ref}
            />
        ));
    }, [severity]);

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
                variant="filled"
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
