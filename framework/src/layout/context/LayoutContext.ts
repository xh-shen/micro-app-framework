/*
 * @Author: shen
 * @Date: 2022-05-20 20:58:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-26 09:40:47
 * @Description:
 */
import type { InjectionKey, Ref } from 'vue'
import { inject, provide } from 'vue'

export interface LayoutContextProps {
  collapse: Ref<boolean>
  prefixCls: string
  activePath: Ref<string>
  updateCollapse: (collapse: boolean) => void
}
export const LayoutContextKey: InjectionKey<LayoutContextProps> = Symbol('HeaderContext')
export const useProvideLayout = (props: LayoutContextProps) => {
  provide(LayoutContextKey, props)
}
export const useInjectLayout = () => {
  return inject(LayoutContextKey, {} as LayoutContextProps)
}
