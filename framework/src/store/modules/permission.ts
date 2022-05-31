/*
 * @Author: shen
 * @Date: 2022-05-26 13:05:04
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 08:18:14
 * @Description:
 */
import { Module } from 'vuex'
import { PermissionState, Menu, State } from '../types'
import { SET_MENU_LIST, SET_MENU_TREE, DEL_ALL_MENU } from '../constants'
import { HOME_VIEW_PATH } from '@/utils/constant'

const dashboard: Menu = {
  id: '10086',
  pid: '0',
  path: HOME_VIEW_PATH,
  title: '首页',
}

const menusData = [
  {
    id: '2',
    pid: '0',
    path: '/demo',
    title: '示例',
  },
  {
    id: '2-1',
    pid: '2',
    path: '/demo/message',
    title: '主子交互',
  },
  {
    id: '2-2',
    pid: '2',
    path: '/demo/request',
    title: '网路请求',
  },
  {
    id: '2-3',
    pid: '2',
    path: '/demo/table',
    title: '表格',
  },
  {
    id: '2-4',
    pid: '2',
    path: '/demo/form',
    title: '表单',
  },
  {
    id: '2-5',
    pid: '2',
    path: '/demo/chart',
    title: '图表',
  },
  {
    id: '2-6',
    pid: '2',
    path: '/demo/language',
    title: '多语言',
  },
  {
    id: '3',
    pid: '0',
    path: '/system',
    title: '系统管理',
  },
  {
    id: '3-1',
    pid: '3',
    path: '/system/user',
    title: '用户管理',
  },
  {
    id: '3-2',
    pid: '3',
    path: '/system/role',
    title: '角色管理',
  },
  {
    id: '4',
    pid: '0',
    path: '/vue2',
    title: 'vue2项目',
  },
  {
    id: '4-1',
    pid: '4',
    path: '/vue2/',
    title: '首页',
  },
  {
    id: '4-2',
    pid: '4',
    path: '/vue2/about',
    title: '关于',
  },
]

function genMenuTree(list: Menu[]) {
  const genTree = (id: string) => {
    const arr: any[] = []
    list
      .filter((item) => {
        return item.pid === id
      })
      .forEach((item) => {
        arr.push({
          ...item,
          children: genTree(item.id),
        })
      })
    return arr
  }
  return genTree('0')
}

const state: PermissionState = {
  home: dashboard,
  menuList: [],
  menuTree: [],
}

const permission: Module<PermissionState, State> = {
  namespaced: true,
  state,
  actions: {
    async getMenuList({ commit }) {
      const list = [state.home, ...menusData]
      const tree = genMenuTree(list)
      commit(SET_MENU_LIST, list)
      commit(SET_MENU_TREE, tree)
    },
    delAllMenu({ commit }) {
      commit(DEL_ALL_MENU)
    },
  },
  mutations: {
    [SET_MENU_LIST](state: PermissionState, list: Menu[]) {
      state.menuList = list
    },
    [SET_MENU_TREE](state: PermissionState, list: Menu[]) {
      state.menuTree = list
    },
    [DEL_ALL_MENU](state: PermissionState) {
      state.menuList = []
      state.menuTree = []
    },
  },
}

export default permission
