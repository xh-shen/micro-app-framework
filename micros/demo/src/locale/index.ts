/*
 * @Author: shen
 * @Date: 2022-05-30 16:58:37
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 21:52:26
 * @Description:
 */
import type { App } from 'vue'
import { createI18n } from '@micro/locale'
import messages from './lang'

const i18n = createI18n(messages)

export function setupI18n(app: App): void {
  app.use(i18n)
  app.config.globalProperties.$t = i18n.global.t
}

export default i18n
