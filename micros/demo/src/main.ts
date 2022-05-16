/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 14:14:46
 * @Description:
 */
import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'
import { setupProTable, setupGlobCom } from '@micro/components'

import App from './App.vue'

const app = bootstrap({
  name: 'demo',
  routes,
  appId: '#app-demo',
  appComponent: App,
})

setupProTable(app)
setupGlobCom(app)
