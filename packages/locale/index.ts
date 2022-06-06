/*
 * @Author: shen
 * @Date: 2022-05-20 15:11:58
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 08:01:55
 * @Description:
 */
import type { App } from 'vue'
import { createI18n as vueCreateI18n } from 'vue-i18n'
import { getLang } from '../utils'
import merge from 'lodash-es/merge'
import isObject from 'lodash-es/isObject'
import globalMessages from './lang'
import config from '../config'

function mergeMessages(messages?: Record<string, any>, useGlobal = true) {
  if (!messages || !isObject(messages)) {
    return {}
  }
  if (useGlobal) {
    return merge(messages, globalMessages)
  }
  return messages || {}
}

const i18n = vueCreateI18n({
  legacy: false,
  locale: getLang() || config.lang,
  fallbackLocale: config.lang,
  messages: globalMessages,
})

export function setupI18n(app: any): void {
  app.use(i18n)
  app.config.globalProperties.$t = i18n.global.t
}

export function createI18n(messages?: Record<string, any>, useGlobal = true) {
  const _messages = mergeMessages(messages, useGlobal)
  const _i18n = vueCreateI18n({
    legacy: false,
    locale: getLang() || config.lang,
    fallbackLocale: config.lang,
    messages: _messages as any,
  })

  return _i18n
}

export default i18n
