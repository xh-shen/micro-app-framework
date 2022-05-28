/*
 * @Author: shen
 * @Date: 2022-03-01 14:44:48
 * @LastEditors: shen
 * @LastEditTime: 2022-03-01 14:44:49
 * @Description:
 */
export const on = function (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture = false): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

export const off = function (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture = false): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}
