/*
 * @Author: shen
 * @Date: 2022-05-15 22:47:59
 * @LastEditors: shen
 * @LastEditTime: 2022-05-26 13:32:32
 * @Description:
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import { getToken } from '@micro/utils'

const whiteList = ['/login', '/404']

router.beforeEach(async (to, _, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    store.dispatch('app/setGlobalData', true)
    store.dispatch('permission/getMenuList')
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
