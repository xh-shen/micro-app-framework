/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 14:30:00
 * @Description:
 */
import { App, InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State as RootState } from './types'
import modules from './modules'

export type State = RootState

export const key: InjectionKey<Store<RootState>> = Symbol('StoreSymbol')

const store = createStore<RootState>({
  modules,
})

export function setupStore(app: App<Element>) {
  app.use(store, key)
}

export default store
