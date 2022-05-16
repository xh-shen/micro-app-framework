/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 11:34:14
 * @Description:
 */
import { App, InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export type State = {
  userInfo: Record<string, unknown>
}
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({})

export function setupStore(app: App<Element>) {
  app.use(store, key)
}

export default store
