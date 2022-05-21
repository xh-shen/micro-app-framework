/*
 * @Author: shen
 * @Date: 2022-05-21 19:46:38
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 20:18:17
 * @Description:
 */

export function useMicroRouter() {
  const push = (path: string) => {
    if (path) {
      window.microApp.dispatch({ path })
    }
  }
  const replace = (path: string) => {
    if (path) {
      window.microApp.dispatch({ path, replace: true })
    }
  }
  return {
    push,
    replace,
  }
}
