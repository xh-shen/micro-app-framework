/*
 * @Author: shen
 * @Date: 2022-05-16 09:32:25
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 13:27:31
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
}
export const key: InjectionKey<Store<State>> = Symbol()

type Options = {
  name: string
  basePath?: string
  routes: Array<RouteRecordRaw>
  appComponent: Component
  appId: string
}

function setRootData(data: Record<string, unknown>, store: Store<State>) {
  store.commit('setUserInfo', data.userInfo)
}

function handleMicroData(router: Router, store: Store<State>) {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    const rootData: Record<string, unknown> = window.microApp.getData()
    setRootData(rootData, store)
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path as string)
      }
      setRootData(data, store)
    })
  }
}

function fixBugForVueRouter4(router: Router, basePath: string) {
  if (window.location.href.includes(basePath)) {
    const realbasePath = window.__MICRO_APP_BASE_ROUTE__.replace(/^\/main-[^/]+/g, '')
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
      userInfo: {},
    },
    mutations: {
      setUserInfo(state: State, data: Record<string, unknown>) {
        state.userInfo = data
      },
    },
  })

  const app = createApp(appComponent)
  app.use(router)
  app.use(store)
  app.mount(appId || '#app')

  handleMicroData(router, store)
  fixBugForVueRouter4(router, base)

  console.log(`微应用${name}渲染了`)
  window.addEventListener('unmount', function () {
    app.unmount()
    console.log(`微应用${name}卸载了`)
  })

  return app
}
