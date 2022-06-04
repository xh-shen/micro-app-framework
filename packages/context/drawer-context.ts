/*
 * @Author: shen
 * @Date: 2022-06-04 17:09:23
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 21:16:27
 * @Description:
 */
import type { InjectionKey, Ref } from 'vue'
import { inject, provide } from 'vue'

export type Handler = null | (() => Promise<boolean> | boolean)

export interface DrawerContextProps {
  loading: Ref<boolean>
  drawerClose: () => void
  onDrawerBeforeClose: (handler: Handler) => void
}
export const DrawerContextKey: InjectionKey<DrawerContextProps> = Symbol('DrawerContext')

export const useProvideDrawer = (props: DrawerContextProps) => {
  provide(DrawerContextKey, props)
}

export const useInjectDrawer = () => {
  return inject(DrawerContextKey, {} as DrawerContextProps)
}
