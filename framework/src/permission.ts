/*
 * @Author: shen
 * @Date: 2022-05-15 22:47:59
 * @LastEditors: shen
 * @LastEditTime: 2022-05-30 14:45:27
 * @Description:
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import { getToken } from '@micro/utils'

const whiteList = ['/login', '/404']

const isExistPath = (path: string) => {
  const menuPaths = store.state.permission.menuList.map((menu) => menu.path)
  return [...whiteList, ...menuPaths].includes(path)
}

router.beforeEach(async (to, _, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    store.dispatch('app/setGlobalData', true)
    store.dispatch('permission/getMenuList')
    if (!isExistPath(to.path)) {
      next({ path: '/404', replace: true })
      return
    }
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
