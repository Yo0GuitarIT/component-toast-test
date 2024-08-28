import React from "react";
import { Button, Container, Stack } from "@mui/material";
import Toast from "./components/Toast";
import { ToastProvider, useToast } from "./components/ToastContext";

function ToastButton() {
    const { showToast } = useToast();

    const toastConfigs = {
        success: { time: 1000, vertical: "bottom", horizontal: "left" },
        warning: { time: 2000, vertical: "top", horizontal: "center" },
        error: { time: 4000, vertical: "bottom", horizontal: "right" },
        default: { time: 3000, vertical: "top", horizontal: "right" },
    };

    const handleClick = (type) => {
        const config = toastConfigs[type] || toastConfigs.default;
        showToast({
            message: `This is a ${type} toast.`,
            severity: type,
            ...config,
        });
    };

    return (
        <Stack direction='row' spacing={1} justifyContent='center'>
            <Button variant='contained' color='success' onClick={() => handleClick("success")}>
                Success
            </Button>
            <Button variant='contained' color='warning' onClick={() => handleClick("warning")}>
                Warning
            </Button>
            <Button variant='contained' color='error' onClick={() => handleClick("error")}>
                Error
            </Button>
            <Button variant='contained' color='info' onClick={() => handleClick("default")}>
                Default
            </Button>
        </Stack>
    );
}

function App() {
    return (
        <ToastProvider>
            <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", padding: "2rem" }}>
                <ToastButton />
                <Toast />
            </Container>
        </ToastProvider>
    );
}

export default App;
