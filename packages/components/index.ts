/*
 * @Author: shen
 * @Date: 2022-05-15 22:19:24
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:20:23
 * @Description:
 */
export * from './src'
import Components from './src/component'
import type { App } from '@vue/runtime-core'
export function setupGlobComp(app: App): void {
  Components.forEach((c) => app.use(c))
}
