/*
 * @Author: shen
 * @Date: 2022-05-20 20:34:42
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 21:10:51
 * @Description:
 */

export function isFunction(val: unknown): val is (...arg: any) => void {
  return typeof val === 'function'
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}

export function isPromise<T = unknown>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function isDef(value: unknown): boolean {
  return value !== undefined && value !== null
}

export function isNumber(value: string) {
  return /^\d+(\.\d+)?$/.test(value)
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

export function isArray(value: unknown) {
  return Array.isArray(value)
}

export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function toPromise(promiseLike: Promise<unknown> | unknown) {
  if (isPromise(promiseLike)) {
    return promiseLike
  }

  return Promise.resolve(promiseLike)
}

export function omitUndefined<T extends Record<string, any>>(obj: T): T {
  const newObj = {} as any
  Object.keys(obj || {}).forEach((key: string) => {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key]
    }
  })
  if (Object.keys(newObj).length < 1) {
    return undefined as any
  }
  return newObj as T
}

export function pickKeys<T extends Record<string, any>>(obj: T, keys: string[]): T {
  const newObj = {} as any
  if (isArray(keys) && keys.length > 0) {
    Object.keys(obj || {}).forEach((key: string) => {
      if (keys.includes(key)) {
        newObj[key] = obj[key]
      }
    })
  }

  return newObj as T
}

export function omitKeysAndUndefined<T extends Record<string, any>>(obj: T, keys: string[]): T {
  const newObj = {} as any
  Object.keys(obj || {}).forEach((key: string) => {
    if (!keys.includes(key) && obj[key] !== undefined) {
      newObj[key] = obj[key]
    }
  })
  if (Object.keys(newObj).length < 1) {
    return undefined as any
  }
  return newObj as T
}
