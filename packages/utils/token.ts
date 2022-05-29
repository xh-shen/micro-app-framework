/*
 * @Author: shen
 * @Date: 2022-05-15 22:51:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 08:09:00
 * @Description:
 */
import { local } from './storage'
import { TOKEN_KEY } from './constant'

export const getToken = () => {
  return local.get<string>(TOKEN_KEY)
}

export const setToken = (val: string) => {
  return local.set(TOKEN_KEY, val)
}

export const removeToken = () => {
  return local.remove(TOKEN_KEY)
}
