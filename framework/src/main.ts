/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 16:23:12
 * @Description:
 */
import { createApp } from 'vue'
import { setupGlobCom } from '@micro/components'
import { setupI18n } from './locale'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupMicro } from './micro'
import { setupTheme } from './theme'

import App from './App.vue'

import './permission'

import '@micro/theme/index.scss'
import 'nprogress/nprogress.css'
import './assets/styles/index.scss'

console.log(process.env)

const app = createApp(App)
setupMicro()
setupTheme()
setupRouter(app)
setupStore(app)
setupGlobCom(app)
setupI18n(app)
app.mount('#app')
