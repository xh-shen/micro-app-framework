/*
 * @Author: shen
 * @Date: 2022-05-20 15:11:58
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 19:47:08
 * @Description:
 */
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './lang'
import { getLang } from '../utils'
import config from '../config'

const i18n = createI18n({
  legacy: false,
  locale: getLang() || config.lang,
  fallbackLocale: config.lang,
  messages,
})

export function setupI18n(app: App<Element>): void {
  app.use(i18n)
  app.config.globalProperties.$t = i18n.global.t
}

export default i18n
