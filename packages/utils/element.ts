/*
 * @Author: shen
 * @Date: 2021-01-22 20:30:11
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 20:43:39
 * @Description:
 */
import { ElNotification, ElMessage } from 'element-plus'

type Type = 'success' | 'warning' | 'info' | 'error' | ''

const notificationDefault: any = {
  title: '提示',
}

export const Notification = (message: string, type: Type = 'success', options?: any) => ElNotification(Object.assign({}, notificationDefault, options, { message, type }))

export const Message = (message: string, type: Type = 'success', options?: any) => ElMessage(Object.assign({}, options, { message, type }))
