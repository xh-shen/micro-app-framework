/*
 * @Author: shen
 * @Date: 2022-05-29 07:37:23
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 07:56:35
 * @Description:
 */
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const localeMap = {
  'zh-cn': zhCn,
  en,
}

export type Lang = keyof typeof localeMap

export function useElementLocale(lang: ComputedRef<Lang>) {
  const locale = computed(() => localeMap[lang.value])

  return locale
}
