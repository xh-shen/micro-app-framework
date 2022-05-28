/*
 * @Author: shen
 * @Date: 2022-05-15 22:49:37
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 08:33:19
 * @Description:
 */
import micro, { unmountAllApps, unmountApp } from '@micro-zoe/micro-app'
export * from './globalData'

export function setupMicro() {
  micro.start()
}

export { unmountAllApps, unmountApp }

export default micro
