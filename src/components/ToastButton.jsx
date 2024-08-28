import { useToast } from "./Toast/ToastContext";
import { Button, Stack } from "@mui/material";

function ToastButton() {
    const toast = useToast();

    return (
        <Stack direction='row' spacing={1} justifyContent='center' flexWrap="wrap">
            <Button
                variant='contained'
                color='primary'
                onClick={() => {
                    toast.success("成功訊息 1",{ time: 1500 });
                    toast.info("資訊訊息", { time: 1000 });
                    toast.warning("警告訊息",{ time: 500 });
                    toast.error("錯誤訊息",{ time: 300 });
                }}
            >
                觸發多個 Toast
            </Button>
            <Button
                variant='contained'
                color='success'
                onClick={() => {
                    toast.success("第一個成功", { vertical: "top", horizontal: "left" });
                    toast.success("第二個成功", { vertical: "top", horizontal: "right" });
                    toast.success("第三個成功", { vertical: "bottom", horizontal: "left" });
                    toast.success("第四個成功", { vertical: "bottom", horizontal: "right" });
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
                    toast.error("錯誤 3", { time: 3000 });
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
                        toast.success("操作完成！", { time: 5000 });
                    }, 3000);
                }}
            >
                模擬操作 Toast
            </Button>
        </Stack>
    );
}

export default ToastButton;