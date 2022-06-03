/*
 * @Author: shen
 * @Date: 2022-05-15 22:38:43
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 16:11:56
 * @Description:
 */

export interface Menu {
  id: string
  pid: string
  path: string
  title: string
  children?: Menu[]
  [key: string]: any
}

export type State = {
  app: AppState
  user: UserState
  permission: PermissionState
  tagsView: TagsViewState
}

// app module
export interface AppState {
  themeColor: string
  lang: string
  isDispathData: boolean
  cacheMicroNames: string[]
}

//user module
export interface UserState {
  userInfo: Record<string, unknown>
  isAuthentication: boolean
  token: string | undefined
}

//permission module
export interface PermissionState {
  home: Menu
  menuList: Menu[]
  menuTree: Menu[]
  allowPaths: string[]
}

// tagsView module
export interface VisitedView {
  path: string
  title?: string
  microName?: string
  [key: string]: any
}

export interface TagsViewState {
  visitedViews: VisitedView[]
}
