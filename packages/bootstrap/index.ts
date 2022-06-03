/*
 * @Author: shen
 * @Date: 2022-05-16 09:32:25
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 15:58:11
 * @Description:
 */
import type { Component, App as AppInstance } from 'vue'
import type { RouteRecordRaw, Router, RouterHistory } from 'vue-router'
import type { Store } from 'vuex'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

export type State = {
  appName: string
  userInfo: Record<string, unknown>
  lang: string
  token: string
  themeColor: string
  cachePaths: string[]
  cacheViewName: {
    [key: string]: string
  }
}
export const key: InjectionKey<Store<State>> = Symbol()

type Options = {
  routes: Array<RouteRecordRaw>
  name?: string
  basePath?: string
  appComponent?: Component
  appId?: string
}

function handleMicroRouterPush(router: Router) {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.replace(data.path as string)
      }
    })
  }
}

function fixBugForRouterBack(router: Router, store: Store<State>) {
  const realbasePath = window.__MICRO_APP_BASE_ROUTE__
  router.beforeEach(() => {
    if (typeof window.history.state?.current === 'string') {
      window.history.state.current = window.history.state.current.replace(new RegExp(realbasePath, 'g'), '')
    }
  })
  router.afterEach((to) => {
    store.commit('setCacheViewName', { path: realbasePath + to.path, name: to.matched[to.matched.length - 1].components.default.name })
    if (typeof window.history.state === 'object') {
      window.history.state.current = realbasePath + (window.history.state.current || '')
    }
  })
}

function handlePopState() {
  if (window.history.state.current !== window.location.pathname) {
    window.history.state.current = window.location.pathname
  }
}

export default ({ routes, appComponent }: Options, onMounted: (app: AppInstance) => void) => {
  let app: AppInstance | null = null
  let router: Router | null = null
  let history: RouterHistory | null = null
  let store: Store<State> | null = null

  function handleGlobalData(data: Record<string, unknown>) {
    if (!data || Object.keys(data).length === 0) {
      return
    }
    if (typeof data.userInfo !== 'undefined') {
      store?.commit('setUserInfo', data.userInfo || {})
    }
    if (typeof data.themeColor !== 'undefined') {
      store?.commit('setThemeColor', data.themeColor)
    }
    if (typeof data.lang !== 'undefined') {
      store?.commit('setLang', data.lang)
    }
    if (typeof data.token !== 'undefined') {
      store?.commit('setToken', data.token)
    }
    if (typeof data.visitedViews !== 'undefined') {
      store?.commit('setCacheViews', data.visitedViews)
    }
  }

  console.log(process.env)

  function mount() {
    const base = window.__MICRO_APP_BASE_ROUTE__ || `/${process.env.VUE_APP_NAME}`
    history = createWebHistory(base)

    router = createRouter({
      history,
      routes,
    }) as Router

    store = createStore<State>({
      state: {
        appName: process.env.VUE_APP_NAME as string,
        token: '',
        userInfo: {},
        lang: '',
        themeColor: '',
        cachePaths: [],
        cacheViewName: {},
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
        setCacheViewName(state: State, data: { path: string; name: string }) {
          const viewNames = { ...state.cacheViewName }
          if (!viewNames[data.path]) {
            viewNames[data.path] = data.name
            state.cacheViewName = viewNames
          }
        },
        setCacheViews(state: State, data: any[]) {
          const paths = data.filter((item: any) => item.path.startsWith(base)).map((item: any) => item.path)
          state.cachePaths = paths
        },
      },
    })

    app = createApp(appComponent || App)
    app.use(router)
    app.use(store)
    onMounted(app)
    app.mount(`#app-${process.env.VUE_APP_NAME}` || '#app')
    app.config.globalProperties.$microRouter = {
      push(path: string) {
        if (typeof path === 'string') {
          window.microApp.dispatch({ path })
        }
      },
    }
    handleMicroRouterPush(router)
    fixBugForRouterBack(router, store)

    window.addEventListener('popstate', handlePopState)

    window.microApp.addGlobalDataListener(handleGlobalData, true)
    console.log(`微应用${process.env.VUE_APP_NAME}渲染了`)
  }

  function unmount() {
    app?.unmount()
    history?.destroy()
    app = null
    router = null
    history = null
    store = null
    window.removeEventListener('popstate', handlePopState)
    window.microApp.removeGlobalDataListener(handleGlobalData)
    window.microApp.clearGlobalDataListener()
    console.log(`微应用${process.env.VUE_APP_NAME}卸载了`)
  }

  if (window.__MICRO_APP_ENVIRONMENT__) {
    ;(window as any)[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
  } else {
    mount()
  }
}
