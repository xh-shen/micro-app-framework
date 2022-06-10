/*
 * @Author: shen
 * @Date: 2022-06-08 10:48:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 10:48:55
 * @Description:
 */
import type { AppContext, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}
