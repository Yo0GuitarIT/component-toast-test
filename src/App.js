import React from "react";
import { Container } from "@mui/material";
import { ToastProvider } from "./components/Toast/ToastProvider";
import ToastButton from "./components/ToastButton";

function App() {
    return (
        <ToastProvider>
            <Container
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                }}
            >
                <ToastButton />
            </Container>
        </ToastProvider>
    );
}

export default App;
