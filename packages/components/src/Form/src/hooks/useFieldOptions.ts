/*
 * @Author: shen
 * @Date: 2022-06-14 14:02:10
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 16:28:12
 * @Description:
 */
import type { Ref, ComputedRef } from 'vue'
import type { Request, Option } from '../interface'
import { ref, watch, toRaw } from 'vue'
import { isFunction } from '@micro/utils'

export default function useFieldOptions(
  options: ComputedRef<Option[]>,
  request: Request | undefined,
  params: ComputedRef<Record<string, any> | undefined>,
): {
  loading: Ref<boolean>
  finallyOptions: Ref<Option[]>
} {
  const loading = ref(false)
  const finallyOptions = ref<Option[]>(options.value || [])

  const getOptionsData = async () => {
    if (isFunction(request)) {
      try {
        loading.value = true
        finallyOptions.value = await request(toRaw(params.value || {}))
      } catch (error) {
        console.error(error)
      }
      loading.value = false
    }
  }

  watch(
    () => params.value,
    () => {
      getOptionsData()
    },
    {
      immediate: true,
    },
  )

  return {
    loading,
    finallyOptions,
  }
}
