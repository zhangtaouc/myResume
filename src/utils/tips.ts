import { type MessageBoxData, ElMessage, ElMessageBox } from 'element-plus'

export function messageSuccess(message: string) {
  ElMessage({
    message,
    type: 'success'
  })
}

export function messageWarn(message: string) {
  ElMessage({
    message,
    type: 'warning'
  })
}

export function messageError(message: string) {
  ElMessage.error(message)
}

export function messageWarnDialog(
  message: string,
  tips = '提醒',
  confirmButtonText = '确定',
  cancelButtonText = '取消'
): Promise<MessageBoxData> {
  return ElMessageBox.confirm(message, tips, {
    confirmButtonText,
    cancelButtonText,
    type: 'warning'
  })
}
