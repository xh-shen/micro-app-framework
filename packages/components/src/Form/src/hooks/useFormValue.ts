/*
 * @Author: shen
 * @Date: 2022-06-09 15:12:48
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 16:12:35
 * @Description:
 */
import type { Ref } from 'vue'
import { ref, toRaw } from 'vue'

export type UseFormValueRes = {
  formValue: Ref<Record<string, any>>
  updateFormValue: (dataIndex: string, value: any) => void
  getFormValue: () => Record<string, any>
}

export default function useFormValue(initialValue: Record<string, any>): UseFormValueRes {
  const formValue = ref<Record<string, any>>(initialValue)

  const updateFormValue = (dataIndex: string, value: any) => {
    formValue.value[dataIndex] = value
  }

  // const setFormValue = () => {}

  const getFormValue = () => {
    return toRaw(formValue.value)
  }

  return {
    formValue,
    updateFormValue,
    getFormValue,
  }
}
