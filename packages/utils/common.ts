/*
 * @Author: shen
 * @Date: 2022-05-20 20:34:42
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 20:18:45
 * @Description:
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const isFunction = (val: any) => typeof val === 'function'
export const controlDefaultValue = Symbol('controlDefaultValue') as any
export const isArray = Array.isArray
export const isString = (val: any) => typeof val === 'string'
export const isSymbol = (val: any) => typeof val === 'symbol'
export const isObject = (val: any) => val !== null && typeof val === 'object'
