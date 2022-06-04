/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 11:41:06
 * @Description:
 */
import { createApp } from 'vue'
import { setupGlobCom } from '@micro/components'
import { setupGlobalIcons } from '@micro/icons'
import { setupI18n } from './locale'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupMicro } from './micro'
import { setupTheme } from './theme'
import { setupIcons } from './icons'

import App from './App.vue'

import './permission'

import '@micro/theme/index.scss'
import 'nprogress/nprogress.css'
import './assets/styles/index.scss'

console.log(process.env)

const app = createApp(App)
setupGlobalIcons()
setupIcons()
setupMicro()
setupTheme()
setupRouter(app)
setupStore(app)
setupGlobCom(app)
setupI18n(app)
app.mount('#app')
