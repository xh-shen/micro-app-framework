/*
 * @Author: shen
 * @Date: 2022-05-21 09:52:27
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 08:33:27
 * @Description:
 */
import { AppState, State } from '../types'
import { Module } from 'vuex'
import config from '@micro/config'
import { setGlobalData, unmountAllApps, unmountApp } from '@/micro'

import { getThemeColor, setThemeColor } from '@micro/utils'
import { SET_APP_THEME, SET_CACHE_MICRO_NAMES, IS_DISPATH_DATA } from '../constants'

const state: AppState = {
  lang: config.lang,
  themeColor: getThemeColor() || config.themeColor,
  cacheMicroNames: [],
  isDispathData: false,
}

const app: Module<AppState, State> = {
  namespaced: true,
  state,
  actions: {
    setThemeColor({ commit }, theme: string) {
      setThemeColor(theme)
      commit(SET_APP_THEME, theme)
    },
    setGlobalData({ state, rootState, commit }, isInit: boolean) {
      if (isInit) {
        if (!state.isDispathData) {
          commit(IS_DISPATH_DATA, true)
        } else {
          return
        }
      }
      setGlobalData({
        token: rootState.user.token,
        userInfo: rootState.user.userInfo,
        themeColor: state.themeColor,
        lang: state.lang,
        visitedViews: rootState.tagsView.visitedViews,
      })
    },
    removeGlobalData({ commit }) {
      commit(IS_DISPATH_DATA, false)
      setGlobalData({
        token: '',
        userInfo: {},
        themeColor: '',
        lang: '',
      })
    },
    setCacheMicroName({ commit, state }, name: string) {
      const newNames = Array.from(new Set([...state.cacheMicroNames, name]))
      commit(SET_CACHE_MICRO_NAMES, newNames)
    },
    async deleteCacheMicroName({ commit, state }, name: string) {
      const cloneNames = [...state.cacheMicroNames]
      const index = cloneNames.findIndex((item) => item === name)
      if (index > -1) {
        cloneNames.splice(index, 1)
        commit(SET_CACHE_MICRO_NAMES, cloneNames)
        await unmountApp(name, { clearAliveState: true })
      }
    },
    async clearCacheMicroNames({ commit }) {
      commit(SET_CACHE_MICRO_NAMES, [])
      await unmountAllApps({ clearAliveState: true })
    },
  },
  mutations: {
    [SET_APP_THEME](state: AppState, theme: string) {
      state.themeColor = theme
    },
    [SET_CACHE_MICRO_NAMES](state: AppState, names: string[]) {
      state.cacheMicroNames = names
    },
    [IS_DISPATH_DATA](state: AppState, status: boolean) {
      state.isDispathData = status
    },
  },
}

export default app
