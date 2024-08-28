import { useToast } from "./Toast/ToastContext";
import { Button, Stack } from "@mui/material";

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
            <Button
                variant='contained'
                color='warning'
                onClick={() => toast.warning("This is a warning toast.", { time: 1500 })}
            >
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

export default ToastButton;
