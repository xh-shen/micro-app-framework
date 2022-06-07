/*
 * @Author: shen
 * @Date: 2022-06-06 17:04:05
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 17:04:09
 * @Description:
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, any, any>
  export default component
}
