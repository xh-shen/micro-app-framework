/*
 * @Author: shen
 * @Date: 2022-06-09 15:12:48
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 08:24:22
 * @Description:
 */
import type { Ref } from 'vue'
import { ref } from 'vue'

export type UseFormValueRes = {
  formValue: Ref<Record<string, any>>
}

export default function useFormValue(initialValue: Record<string, any>): UseFormValueRes {
  const formValue = ref<Record<string, any>>(initialValue)

  const setFormValue = () => {}

  return {
    formValue,
  }
}
