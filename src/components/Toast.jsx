import { Snackbar } from "@mui/material";

function Toast({ open, handleClose, message }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={message}
        />
    );
}

export default Toast;
