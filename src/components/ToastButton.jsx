import { useToast } from "./Toast/useToast";
import { Button, Stack } from "@mui/material";

function ToastButton() {
    const toast = useToast();

    return (
        <Stack direction='row' spacing={1} justifyContent='center' flexWrap='wrap'>
            <Button
                variant='contained'
                color='primary'
                onClick={() => {
                    toast.success("成功訊息 短訊息", { time: 500 });
                    toast.info("資訊訊息 中等長度的訊息", { time: 500 });
                    toast.warning("警告訊息 這是一個詳細的長訊息", { time: 500 });
                    toast.error("錯誤", { time: 500 });
                }}
            >
                觸發多個 Toast
            </Button>
            <Button
                variant='contained'
                color='success'
                onClick={() => {
                    toast.success("第一個成功", { vertical: "top", horizontal: "left" });
                    toast.success("第二個錯誤", { severity: "error", vertical: "top", horizontal: "right" });
                    toast.success("第三個警示", { severity: "warning", vertical: "bottom", horizontal: "left" });
                    toast.success("預設", { severity: "info", vertical: "bottom", horizontal: "right" });
                }}
            >
                多個成功 Toast
            </Button>
            <Button
                variant='contained'
                color='error'
                onClick={() => {
                    toast.error("錯誤 1", { time: 1000 });
                    toast.error("錯誤 2", { time: 2000 });
                    toast.error("錯誤 3", { time: 2500 });
                }}
            >
                連續錯誤 Toast
            </Button>
            <Button
                variant='contained'
                color='warning'
                onClick={() => {
                    toast.warning("警告！", { vertical: "top", horizontal: "center" });
                    setTimeout(() => {
                        toast.info("附加資訊", { vertical: "bottom", horizontal: "center" });
                    }, 1000);
                }}
            >
                延遲 Toast
            </Button>
            <Button
                variant='contained'
                color='info'
                onClick={() => {
                    toast.info("開始長時間操作");
                    setTimeout(() => {
                        toast.success("操作完成！", { time: 3000 });
                    }, 5000);
                }}
            >
                模擬操作 Toast
            </Button>
        </Stack>
    );
}

export default ToastButton;
