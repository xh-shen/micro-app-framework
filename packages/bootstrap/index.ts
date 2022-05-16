/*
 * @Author: shen
 * @Date: 2022-05-16 09:32:25
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 22:23:17
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

function handleMicroData(router: Router) {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // const rootData: Record<string, unknown> = window.microApp.getData()
    // setRootData(rootData, store)
    // if (rootData.userInfo) {
    //   setRootData(rootData, store)
    // }
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path as string)
      }
      // if (data.userInfo) {
      //   setRootData(data, store)
      // }
    })
  }
}

function fixBugForVueRouter4(router: Router, basePath: string) {
  if (window.location.href.includes(basePath)) {
    const realbasePath = window.__MICRO_APP_BASE_ROUTE__
    router.beforeEach(() => {
      // console.log('origin state', window.history.state)
      // console.log('origin beforeEach', window.history.state?.current)
      if (typeof window.history.state?.current === 'string') {
        window.history.state.current = window.history.state.current.replace(new RegExp(realbasePath, 'g'), '')
      }
      // console.log('target beforeEach', window.history.state?.current)
    })
    router.afterEach(() => {
      // console.log('origin state', window.history.state)
      // console.log('origin afterEach', window.history.state?.current)
      if (typeof window.history.state === 'object') {
        window.history.state.current = realbasePath + (window.history.state.current || '')
      }
      // console.log('target afterEach', window.history.state?.current)
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

  handleMicroData(router)
  fixBugForVueRouter4(router, base)

  function handleGlobalData(data: any) {
    store.commit('setUserInfo', data)
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
