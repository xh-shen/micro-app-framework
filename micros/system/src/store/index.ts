/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-15 22:38:53
 * @Description:
 */
import { App, InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { AppState } from './types'

export type State = {
  app: AppState
}
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({})

export function setupStore(app: App<Element>) {
  app.use(store, key)
}

export default store
