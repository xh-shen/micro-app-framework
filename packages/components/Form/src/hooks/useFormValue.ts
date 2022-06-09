/*
 * @Author: shen
 * @Date: 2022-06-09 15:12:48
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 16:49:10
 * @Description:
 */
import type { Ref } from 'vue'
import { ref } from 'vue'

interface UseFormValueProps {
  initialValue: any
}

export type UseFormValueRes = {
  formValue: Ref<Record<string, any>>
}

export default function useFormValue({ initialValue }: UseFormValueProps): UseFormValueRes {
  const formValue = ref(initialValue)

  return {
    formValue,
  }
}
