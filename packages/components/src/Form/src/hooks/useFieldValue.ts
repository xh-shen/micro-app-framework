/*
 * @Author: shen
 * @Date: 2022-06-10 15:44:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 21:48:52
 * @Description:
 */
import type { Ref } from 'vue'
import { shallowRef, watchEffect } from 'vue'
import { useInjectForm } from '../context/FormContext'

export default function useFieldValue(name: string): {
  fieldValue: Ref<any>
  onValueChange: (value: any) => void
} {
  const fieldValue = shallowRef()

  const { formValue, updateValue } = useInjectForm()

  const onValueChange = (value: any) => {
    updateValue(name!, value)
  }

  watchEffect(() => {
    fieldValue.value = formValue.value[name!]
  })

  return {
    fieldValue,
    onValueChange,
  }
}
