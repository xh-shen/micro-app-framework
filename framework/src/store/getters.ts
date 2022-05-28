/*
 * @Author: shen
 * @Date: 2022-05-16 15:50:37
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 15:51:05
 * @Description:
 */
import { State } from './index'

const getters = {
  userInfo: (state: State) => state.user.userInfo,
  isAuthentication: (state: State) => state.user.isAuthentication,
}

type GettersKeys = typeof getters
export type Getters = {
  [K in keyof GettersKeys]: ReturnType<GettersKeys[K]>
}

export default getters
