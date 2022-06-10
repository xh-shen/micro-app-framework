/*
 * @Author: shen
 * @Date: 2022-05-29 17:08:03
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 08:41:06
 * @Description:
 */
import { useI18n as baseUseI18n } from 'vue-i18n'

type Message = { [prop: string]: { [prop: string]: string | Record<string, any> } }

export const useMicroI18n = (messages?: Message) => {
  const { t, mergeLocaleMessage, locale } = baseUseI18n()
  if (messages) {
    for (const key in messages) {
      mergeLocaleMessage(key, messages[key])
    }
  }
  return { t, locale }
}
