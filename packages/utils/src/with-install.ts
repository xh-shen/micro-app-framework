/*
 * @Author: shen
 * @Date: 2022-05-28 10:04:26
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 21:54:38
 * @Description:
 */
import { App } from 'vue'
import type { SFCWithInstall } from './typescript'

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}
