/*
 * @Author: shen
 * @Date: 2021-01-22 20:30:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 13:16:39
 * @Description:
 */
import type { NotificationOptions, MessageOptions, ElMessageBoxOptions } from 'element-plus'
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'

type Type = 'success' | 'warning' | 'info' | 'error' | ''

const defaultTitle = '提示'

export const Notification = (message: string, type: Type = 'success', options?: NotificationOptions) => ElNotification(Object.assign({}, { title: defaultTitle }, options, { message, type }))

export const Message = (message: string, type: Type = 'success', options?: MessageOptions) => ElMessage(Object.assign({}, options, { message, type }))

export const Alert = async (message: string, type: Type = '', options?: ElMessageBoxOptions) =>
  ElMessageBox.alert(message, defaultTitle, {
    confirmButtonText: '确定',
    dangerouslyUseHTMLString: true,
    type,
    ...options,
  })

export const Confirm = async (message: string, type: Type = '', options?: ElMessageBoxOptions) =>
  ElMessageBox.confirm(message, defaultTitle, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    dangerouslyUseHTMLString: true,
    type,
    ...options,
  })
