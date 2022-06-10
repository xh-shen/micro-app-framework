/*
 * @Author: shen
 * @Date: 2022-05-21 14:36:34
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 08:12:04
 * @Description:
 */
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export function useGlobalData(): {
  userInfo: ComputedRef<Record<string, any>>
  token: ComputedRef<string>
  themeColor: ComputedRef<string>
  lang: ComputedRef<string>
  argvs: Record<string, any>
} {
  const { state } = useStore()
  const userInfo = computed<Record<string, any>>(() => state.userInfo)
  const token = computed<string>(() => state.token)
  const themeColor = computed<string>(() => state.themeColor)
  const lang = computed<string>(() => state.lang)
  const argvs = computed<Record<string, any>>(() => state.argvs)

  return {
    userInfo,
    token,
    themeColor,
    lang,
    argvs,
  }
}
