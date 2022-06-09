/*
 * @Author: shen
 * @Date: 2022-05-28 10:04:26
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 10:49:39
 * @Description:
 */
// // import { App } from 'vue'
// const camelizeRE = /-(\w)/g

// type EventShim = {
//   new (...args: any[]): {
//     $props: {
//       onClick?: (...args: any[]) => void
//     }
//   }
// }

// export type WithInstall<T> = T & {
//   install(app: any): void
// } & EventShim

// function camelize(str: string) {
//   return str.replace(camelizeRE, (_, c) => c.toUpperCase())
// }

// export function withInstall<T>(options: T) {
//   ;(options as Record<string, unknown>).install = (app: any) => {
//     const { name } = options as unknown as { name: string }
//     app.component(name, options)
//     app.component(camelize(`-${name}`), options)
//   }

//   return options
// }

import type { SFCWithInstall } from './typescript'

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
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
