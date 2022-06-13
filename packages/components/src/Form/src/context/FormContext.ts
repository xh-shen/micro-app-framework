/*
 * @Author: shen
 * @Date: 2022-06-08 20:07:35
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 08:32:34
 * @Description:
 */
import type { InjectionKey, ComputedRef, Ref } from 'vue'
import type { FormLabelPosition, ColProps, FormItemType, FormMode } from '../interface'
import { inject, provide } from 'vue'

export interface FormContextProps {
  mode: ComputedRef<FormMode>
  labelWidth: ComputedRef<string | number>
  labelPosition: ComputedRef<FormLabelPosition>
  disabled: ComputedRef<boolean>
  colProps: ComputedRef<ColProps>
  formValues: Ref<Record<string, any>>
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
