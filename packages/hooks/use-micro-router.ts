/*
 * @Author: shen
 * @Date: 2022-05-21 19:46:38
 * @LastEditors: shen
 * @LastEditTime: 2022-05-23 20:21:55
 * @Description:
 */

export function useMicroRouter() {
  const push = (path: string) => {
    if (typeof path === 'string') {
      window.microApp.dispatch({ path })
    }
  }
  return {
    push,
  }
}
