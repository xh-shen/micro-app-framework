/*
 * @Author: shen
 * @Date: 2022-06-08 16:35:27
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 21:43:37
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormItemType } from '../interface'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { isArray } from 'lodash-es'

export default function useFormItems(
  rawItems: Ref<FormItemType[]>,
  rawInitialValue: Record<string, any>,
): {
  mergeInitialValue: Record<string, any>
  items: Ref<FormItemType[]>
} {
  const mergeInitialValue: Record<string, any> = { ...rawInitialValue }
  const items = ref<FormItemType[]>([])

  watchEffect(() => {
    items.value = rawItems.value
  })

  const genDefaultValue = (list: FormItemType[]) => {
    list.forEach((item) => {
      if (item.type === 'group' && isArray(item.children) && item.children.length > 0) {
        genDefaultValue(item.children)
      } else {
        mergeInitialValue[item.dataIndex] = rawInitialValue[item.dataIndex] || item.initialValue
      }
    })
  }

  genDefaultValue(rawItems.value)

  onMounted(() => {
    genDefaultValue(rawItems.value)
  })

  return {
    items,
    mergeInitialValue,
  }
}
