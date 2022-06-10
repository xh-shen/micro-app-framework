/*
 * @Author: shen
 * @Date: 2022-06-10 15:44:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 16:07:08
 * @Description:
 */
import type { Ref } from 'vue'
import { shallowRef, watchEffect } from 'vue'
import { useInjectForm } from '../context/FormContext'
import { FormItemType } from '../interface'

export default function useFieldValue(item: FormItemType): {
  fieldValue: Ref<any>
  onValueChange: (value: any) => void
} {
  const fieldValue = shallowRef()

  const { formValue, updateFormValue } = useInjectForm()

  const onValueChange = (value: any) => {
    updateFormValue(item.dataIndex!, value)
  }

  watchEffect(() => {
    fieldValue.value = formValue.value[item.dataIndex!]
  })

  return {
    fieldValue,
    onValueChange,
  }
}
