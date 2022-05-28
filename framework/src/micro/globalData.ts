/*
 * @Author: shen
 * @Date: 2022-05-21 12:49:28
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 14:35:40
 * @Description:
 */
import micro from '@micro-zoe/micro-app'

export const setGlobalData = (data: Record<string, unknown>) => {
  micro.setGlobalData(data)
}
