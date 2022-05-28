/*
 * @Author: shen
 * @Date: 2022-05-16 15:37:43
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 09:50:59
 * @Description:
 */
import { Module } from 'vuex'
import { UserState, State } from '../types'
import { SET_TOKEN, SET_USER_INFO, SET_IS_AUTHENTICATION } from '../constants'
import { getToken, removeToken, setToken, getUserInfo, removeUserInfo, setUserInfo } from '@micro/utils'

const state: UserState = {
  token: getToken() as string,
  userInfo: getUserInfo() || {},
  isAuthentication: false,
}

const user: Module<UserState, State> = {
  namespaced: true,
  state,
  actions: {
    setToken({ commit }, token: string) {
      setToken(token)
      commit(SET_TOKEN, token)
    },
    setUserInfo({ commit }, data: Record<string, unknown>) {
      setUserInfo(data)
      commit(SET_USER_INFO, data)
    },
    setAuthentication({ commit }, val: boolean) {
      commit(SET_IS_AUTHENTICATION, val)
    },
    async logout({ dispatch }) {
      // 此处可以使用服务端退出
      await dispatch('resetToken')
      await dispatch('app/removeGlobalData', null, { root: true })
      await dispatch('tagsView/clearVisitedView', null, { root: true })
      await dispatch('app/clearCacheMicroNames', null, { root: true })
      return true
    },
    resetToken({ commit }) {
      commit(SET_TOKEN, '')
      commit(SET_IS_AUTHENTICATION, false)
      commit(SET_USER_INFO, {})
      removeToken()
      removeUserInfo()
    },
  },
  mutations: {
    [SET_TOKEN]: (state: UserState, token) => {
      state.token = token
    },
    [SET_USER_INFO](state: UserState, info: Record<string, unknown>) {
      state.userInfo = info
    },
    [SET_IS_AUTHENTICATION](state: UserState, val: boolean) {
      state.isAuthentication = val
    },
  },
}

export default user
