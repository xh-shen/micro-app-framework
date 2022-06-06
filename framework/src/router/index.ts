/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 09:25:44
 * @Description:
 */
// import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLICK_PATH),
  routes,
})

export function setupRouter(app: any) {
  app.use(router)
}

export default router
