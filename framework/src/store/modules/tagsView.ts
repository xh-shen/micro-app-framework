/*
 * @Author: shen
 * @Date: 2022-05-26 13:05:04
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 17:16:56
 * @Description:
 */
import { Module } from 'vuex'
import { TagsViewState, State, VisitedView } from '../types'
import { ADD_VISITED_VIEW, DEL_VISITED_VIEW, CLEAR_VISITED_VIEWS, DEL_OTHERS_VISITED_VIEWS } from '../constants'
import { local } from '@micro/utils'
import { TAGS_LIST_KEY, HOME_VIEW_PATH } from '@/utils/constant'

const setLocalViews = (views: any) => {
  local.set(TAGS_LIST_KEY, views)
}

const getLocalViews = () => {
  return local.get<VisitedView[]>(TAGS_LIST_KEY)
}

const state: TagsViewState = {
  visitedViews: getLocalViews() || [],
}

const tagsView: Module<TagsViewState, State> = {
  namespaced: true,
  state,
  actions: {
    addVisitedView({ commit }, view) {
      commit(ADD_VISITED_VIEW, view)
    },
    delVisitedView({ commit }, index) {
      commit(DEL_VISITED_VIEW, index)
    },
    delOthersViews({ commit }, view) {
      commit(DEL_OTHERS_VISITED_VIEWS, view)
    },
    async delAllViews({ dispatch }) {
      dispatch('clearVisitedView')
      await dispatch('app/clearCacheMicroNames', null, { root: true })
    },
    clearVisitedView({ commit }) {
      commit(CLEAR_VISITED_VIEWS)
    },
  },
  mutations: {
    [ADD_VISITED_VIEW](state: TagsViewState, view) {
      if (view.path === HOME_VIEW_PATH) return
      if (state.visitedViews.some((v) => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.title || 'no-name',
        }),
      )
      setLocalViews(state.visitedViews)
    },
    [DEL_VISITED_VIEW](state: TagsViewState, index) {
      state.visitedViews.splice(index, 1)
      setLocalViews(state.visitedViews)
    },
    [DEL_OTHERS_VISITED_VIEWS]: (state, view) => {
      if (view.path === HOME_VIEW_PATH) {
        state.visitedViews = []
      } else {
        state.visitedViews = [view]
      }
      setLocalViews(state.visitedViews)
    },
    [CLEAR_VISITED_VIEWS]: (state) => {
      state.visitedViews = []
      setLocalViews(state.visitedViews)
    },
  },
}

export default tagsView
