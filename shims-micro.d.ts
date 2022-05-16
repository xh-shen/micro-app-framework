/*
 * @Author: shen
 * @Date: 2022-05-15 22:40:06
 * @LastEditors: shen
 * @LastEditTime: 2022-05-15 23:09:51
 * @Description:
 */
declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
    __MICRO_APP_PUBLIC_PATH__: string
  }
}
