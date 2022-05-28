/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-26 21:16:07
 * @Description:
 */
import { createApp } from 'vue'
import { setupGlobCom } from '@micro/components'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupMicro } from './micro'
import { setupTheme } from './theme'

import App from './App.vue'

import './permission'

import '@micro/theme/index.scss'
import 'nprogress/nprogress.css'
import './assets/styles/index.scss'

const app = createApp(App)
setupMicro()
setupTheme()
setupRouter(app)
setupStore(app)
setupGlobCom(app)
app.mount('#app')
