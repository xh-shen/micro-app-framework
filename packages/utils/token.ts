/*
 * @Author: shen
 * @Date: 2022-05-15 22:51:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-25 09:24:33
 * @Description:
 */
import { local } from './storage'

export const TOKEN_KEY = 'token'

export const getToken = () => {
  return local.get<string>(TOKEN_KEY)
}

export const setToken = (val: string) => {
  return local.set(TOKEN_KEY, val)
}

export const removeToken = () => {
  return local.remove(TOKEN_KEY)
}
