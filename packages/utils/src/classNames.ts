/*
 * @Author: shen
 * @Date: 2022-06-03 20:18:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 20:20:07
 * @Description:
 */
import { isArray, isString, isObject } from './common'

export function classNames(...args: any[]): string {
  const classes = []
  for (let i = 0; i < args.length; i++) {
    const value = args[i]
    if (!value) continue
    if (isString(value)) {
      classes.push(value)
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const inner = classNames(value[i])
        if (inner) {
          classes.push(inner)
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name)
        }
      }
    }
  }
  return classes.join(' ')
}

export default classNames
