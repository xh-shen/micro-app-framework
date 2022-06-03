/*
 * @Author: shen
 * @Date: 2022-05-16 19:43:36
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 17:09:17
 * @Description:
 */
import type { Ref } from 'vue'
import { watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { useStore } from './use-store'
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import config from '@micro/config'

export function useMicroPath(): {
  activePath: Ref<string>
} {
  const { state, dispatch } = useStore()
  const activePath = ref('')
  const route = useRoute()
  const title = useTitle()
  const meun = computed(() => state.permission.menuList.find((menu) => menu.path === route.path))

  watch(
    () => route.path,
    (newPath) => {
      if (route.name) {
        activePath.value = newPath

        setTimeout(() => {
          if (meun.value) {
            title.value = `${meun.value.title} - ${config.title}`
            dispatch('tagsView/addVisitedView', meun.value)
          }
          const appName = getActiveApps(true)[0]
          if (appName) {
            const childPath = route.path.replace('/' + appName, '') || '/'
            microApp.setData(appName, { path: childPath })
          }
        }, 0)
      }
    },
    {
      immediate: true,
    },
  )

  return { activePath }
}
