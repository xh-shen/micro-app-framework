/*
 * @Author: shen
 * @Date: 2022-06-08 16:35:27
 * @LastEditors: shen
 * @LastEditTime: 2022-06-16 17:25:09
 * @Description:
 */
import type { Ref, ComputedRef } from 'vue'
import type { FormItemType } from '../interface'
import { ref, watchEffect, computed } from 'vue'
import { omitUndefined } from '@micro/utils'

export default function useFormItems(rawItems: Ref<FormItemType[]>): {
  items: Ref<FormItemType[]>
  genItems: (items: FormItemType[]) => FormItemType[]
  fieldInitialValues: ComputedRef<Record<string, any>>
} {
  const items = ref<FormItemType[]>([])

  const fieldInitialValues = computed(() => {
    const values: Record<string, any> = {}
    rawItems.value.forEach((item) => {
      if (item.initialValue && item.name) {
        values[item.name] = item.initialValue
      }
    })
    return values
  })

  const genItems = (items: FormItemType[]) =>
    items
      .filter((originItem) => {
        return !originItem.hidden
      })
      .sort((a, b) => {
        if (b.order || a.order) {
          return (b.order || 0) - (a.order || 0)
        }
        return (b.index || 0) - (a.index || 0)
      })
      .map((originItem, index) => {
        const item = omitUndefined({
          label: originItem.label,
          key: originItem.key,
          type: originItem.type || 'input',
          // children: originItem.children,
          name: originItem.name,
          initialValue: originItem.initialValue,
          // index: originItem.index,
          width: originItem.width,
          fieldStyle: originItem.fieldStyle,
          readonly: originItem.readonly,
          disabled: originItem.disabled,
          clearable: originItem.clearable,
          options: originItem.options,
          rules: originItem.rules,
          colProps: originItem.colProps,
          tooltip: originItem.tooltip,
          fieldProps: originItem.fieldProps,
          render: originItem.render,
          renderField: originItem.renderField,
          renderText: originItem.renderText,
          request: originItem.request,
          params: originItem.params,
          // transform: originItem.transform,
          // convertValue: originItem.convertValue,
          onChange: originItem.onChange,
        })

        item.key = item.key || item.name?.toString() || index

        return item
      })
      .filter((field) => {
        return Boolean(field)
      })

  watchEffect(() => {
    items.value = genItems(rawItems.value)
  })

  return {
    items,
    genItems,
    fieldInitialValues,
  }
}
