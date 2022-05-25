/*
 * @Author: shen
 * @Date: 2022-05-15 22:51:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-25 08:22:39
 * @Description:
 */
import { local } from './storage'

export const USER_INFO_KEY = 'userInfo'

export const getUserInfo = () => {
  return local.get(USER_INFO_KEY)
}

export const setUserInfo = (data: Record<string, unknown>) => {
  return local.set(USER_INFO_KEY, data)
}

export const removeUserInfo = () => {
  return local.remove(USER_INFO_KEY)
}
