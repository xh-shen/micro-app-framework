/*
 * @Author: shen
 * @Date: 2022-05-29 17:08:03
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 17:08:10
 * @Description:
 */
import { useI18n as baseUseI18n } from 'vue-i18n'

type Message = { [prop: string]: { [prop: string]: string | Record<string, any> } }

export const useI18n = (messages?: Message) => {
  const { t, mergeLocaleMessage, locale } = baseUseI18n()
  if (messages) {
    for (const key in messages) {
      mergeLocaleMessage(key, messages[key])
    }
  }
  return { t, locale }
}
