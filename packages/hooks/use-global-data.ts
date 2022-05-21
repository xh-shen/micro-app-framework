/*
 * @Author: shen
 * @Date: 2022-05-21 14:36:34
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 14:57:12
 * @Description:
 */
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export function useGlobalData(): {
  userInfo: ComputedRef<Record<string, unknown>>
  token: ComputedRef<string>
  themeColor: ComputedRef<string>
  lang: ComputedRef<string>
} {
  const { state } = useStore()
  const userInfo = computed<Record<string, unknown>>(() => state.userInfo)
  const token = computed<string>(() => state.token)
  const themeColor = computed<string>(() => state.themeColor)
  const lang = computed<string>(() => state.lang)

  return {
    userInfo,
    token,
    themeColor,
    lang,
  }
}
