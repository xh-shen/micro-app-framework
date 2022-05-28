/*
 * @Author: shen
 * @Date: 2022-05-16 15:50:11
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 15:50:19
 * @Description:
 */
import { useStore as baseUseStore } from 'vuex'
import { key, State } from '@/store'
import { Getters } from '@/store/getters'

interface UseStore {
  state: State
  getters: Getters
  commit: any
  dispatch: any
}

export function useStore(): UseStore {
  const store = baseUseStore<State>(key)
  const { state, getters, dispatch, commit }: UseStore = store
  return {
    state,
    getters,
    commit,
    dispatch,
  }
}
