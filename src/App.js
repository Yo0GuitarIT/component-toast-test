import React, { useState } from "react";
import { Button, Container, Stack } from "@mui/material";
import Toast from "./components/Toast";

function App() {
    const [toast, setToast] = useState({
        open: false,
        message: "",
    });

    const handleClick = (type) => {
        setToast({
            open: true,
            message: `This is a ${type} toast.`,
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
            </Stack>
            <Toast
                open={toast.open}
                handleClose={handleClose}
                message={toast.message}
            />
        </Container>
    );
}

export default App;
