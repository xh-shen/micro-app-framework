/*
 * @Author: shen
 * @Date: 2022-06-10 15:44:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 13:48:01
 * @Description:
 */
import type { Ref } from 'vue'
import { shallowRef, watchEffect } from 'vue'
import { useInjectForm } from '../context/FormContext'

export default function useFieldValue<T>(name: string): {
  fieldValue: Ref<T | undefined>
  onValueChange: (value: T) => void
} {
  const fieldValue = shallowRef<T | undefined>()

  const { formValues, updateValue } = useInjectForm()

  const onValueChange = (value: T) => {
    updateValue(name!, value)
  }

  watchEffect(() => {
    fieldValue.value = formValues.value[name!] as T
  })

  return {
    fieldValue,
    onValueChange,
  }
}
