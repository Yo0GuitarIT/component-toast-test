import React, { useState } from "react";
import { Button, Container, Stack } from "@mui/material";
import Toast from "./components/Toast";

function App() {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        severity: "success",
        vertical: "top",
        horizontal: "left",
        time: 3000,
    });

    const toastConfigs = {
        success: { time: 1000, vertical: "bottom", horizontal: "left" },
        warning: { time: 2000, vertical: "bottom", horizontal: "center" },
        error: { time: 4000, vertical: "bottom", horizontal: "right" },
        default: { time: 3000, vertical: "top", horizontal: "right" },
    };

    const handleClick = (type) => {
        const config = toastConfigs[type] || toastConfigs.default;
        setToast({
            open: true,
            message: `This is a ${type} toast.`,
            severity: type,
            ...config,
        });
    };

    const handleClose = (event, reason) => {
        // prevent closing when clicking not in the toast area
        if (reason === "clickaway") {
            return;
        }
        setToast({ ...toast, open: false });
    };

    return (
        <Container>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: 4 }}
            >
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleClick("success")}
                >
                    Success
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleClick("warning")}
                >
                    Warning
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleClick("error")}
                >
                    Error
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => handleClick("default")}
                >
                    default
                </Button>
            </Stack>
            <Toast
                open={toast.open}
                handleClose={handleClose}
                message={toast.message}
                severity={toast.severity}
                vertical={toast.vertical}
                horizontal={toast.horizontal}
                time={toast.time}
            />
        </Container>
    );
}

export default App;
