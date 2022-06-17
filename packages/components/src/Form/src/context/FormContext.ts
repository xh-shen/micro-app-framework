/*
 * @Author: shen
 * @Date: 2022-06-08 20:07:35
 * @LastEditors: shen
 * @LastEditTime: 2022-06-17 15:45:56
 * @Description:
 */
import type { InjectionKey, ComputedRef, Ref } from 'vue'
import type { ColProps, FormItemType, FormMode, FormLayoutType, FormTab } from '../interface'
import { inject, provide } from 'vue'

export interface FormContextProps {
  mode: ComputedRef<FormMode>
  grid: ComputedRef<boolean>
  gutter: ComputedRef<number>
  labelWidth: ComputedRef<string | number>
  disabled: ComputedRef<boolean>
  colProps: ComputedRef<Partial<ColProps>>
  layoutType: ComputedRef<FormLayoutType>
  formValues: Ref<Record<string, any>>
  addTab: (tab: FormTab) => void
  genItems: (items: FormItemType[]) => FormItemType[]
  updateValue: (name: string, value: any) => void
}
export const FormContextKey: InjectionKey<FormContextProps> = Symbol('FormContext')

export const useProvideForm = (props: FormContextProps) => {
  provide(FormContextKey, props)
}

export const useInjectForm = () => {
  return inject(FormContextKey, {} as FormContextProps)
}
