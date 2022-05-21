/*
 * @Author: shen
 * @Date: 2022-05-16 09:32:25
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 20:27:48
 * @Description:
 */
import type { Component } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'
import type { Store } from 'vuex'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { InjectionKey } from 'vue'
import { createStore } from 'vuex'

export type State = {
  userInfo: Record<string, unknown>
  lang: string
  token: string
  themeColor: string
}
export const key: InjectionKey<Store<State>> = Symbol()

type Options = {
  name: string
  basePath?: string
  routes: Array<RouteRecordRaw>
  appComponent: Component
  appId: string
}

function handleMicroData(router: Router) {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path as string)
      }
    })
  }
}

function fixBugForVueRouter4(router: Router, basePath: string) {
  if (window.location.href.includes(basePath)) {
    const realbasePath = window.__MICRO_APP_BASE_ROUTE__
    router.beforeEach(() => {
      if (typeof window.history.state?.current === 'string') {
        window.history.state.current = window.history.state.current.replace(new RegExp(realbasePath, 'g'), '')
      }
    })
    router.afterEach(() => {
      if (typeof window.history.state === 'object') {
        window.history.state.current = realbasePath + (window.history.state.current || '')
      }
    })
  }
}

export default ({ name, basePath, routes, appComponent, appId }: Options) => {
  const base = window.__MICRO_APP_BASE_ROUTE__ || basePath || `/${name}`
  const router = createRouter({
    history: createWebHistory(base),
    routes,
  })

  const store = createStore<State>({
    state: {
      token: '',
      userInfo: {},
      lang: '',
      themeColor: '',
    },
    mutations: {
      setUserInfo(state: State, data: Record<string, unknown>) {
        state.userInfo = data
      },
      setLang(state: State, data: string) {
        state.lang = data
      },
      setToken(state: State, data: string) {
        state.token = data
      },
      setThemeColor(state: State, data: string) {
        state.themeColor = data
      },
    },
  })

  const app = createApp(appComponent)
  app.use(router)
  app.use(store)
  app.mount(appId || '#app')

  app.config.globalProperties.$microRouter = {
    push(path: string) {
      if (typeof path === 'string') {
        window.microApp.dispatch({ path })
      }
    },
    replace(path: string) {
      if (typeof path === 'string') {
        window.microApp.dispatch({ path, replace: true })
      }
    },
  }

  handleMicroData(router)
  fixBugForVueRouter4(router, base)

  function handleGlobalData(data: Record<string, unknown>) {
    if (!data || Object.keys(data).length === 0) {
      return
    }
    if (typeof data.userInfo !== 'undefined') {
      store.commit('setUserInfo', data.userInfo || {})
    }
    if (typeof data.themeColor !== 'undefined') {
      store.commit('setThemeColor', data.themeColor)
    }
    if (typeof data.lang !== 'undefined') {
      store.commit('setLang', data.lang)
    }
    if (typeof data.token !== 'undefined') {
      store.commit('setToken', data.token)
    }
  }

  window.microApp.addGlobalDataListener(handleGlobalData, true)

  console.log(`微应用${name}渲染了`)
  window.addEventListener('unmount', function () {
    app.unmount()
    window.microApp.removeGlobalDataListener(handleGlobalData)
    window.microApp.clearGlobalDataListener()
    console.log(`微应用${name}卸载了`)
  })

  return app
}
