import React from "react";
import { Button, Container, Stack } from "@mui/material";
import { ToastProvider } from "./components/ToastContext";
import Toast from "./components/Toast";
import { useToast } from "./components/ToastContext";

function ToastButton() {
    const toast = useToast();

    return (
        <Stack direction='row' spacing={1} justifyContent='center'>
            <Button
                variant='contained'
                color='success'
                onClick={() =>
                    toast.success("This is a success toast.", {
                        vertical: "bottom",
                        horizontal: "right",
                        slideDirection: "up",
                    })
                }
            >
                Success
            </Button>
            <Button variant='contained' color='warning' onClick={() => toast.warning("This is a warning toast.")}>
                Warning
            </Button>
            <Button variant='contained' color='error' onClick={() => toast.error("This is an error toast.")}>
                Error
            </Button>
            <Button
                variant='contained'
                color='info'
                onClick={() => toast.info("This is an info toast.", { time: 5000 })}
            >
                Info (5s)
            </Button>
        </Stack>
    );
}

function App() {
    return (
        <ToastProvider>
            <Container
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "2rem",
                }}
            >
                <ToastButton />
                <Toast />
            </Container>
        </ToastProvider>
    );
}

export default App;
