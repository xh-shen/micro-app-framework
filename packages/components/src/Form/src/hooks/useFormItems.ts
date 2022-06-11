/*
 * @Author: shen
 * @Date: 2022-06-08 16:35:27
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 22:15:56
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormItemType } from '../interface'
import { ref, watchEffect } from 'vue'
import { omitUndefined } from '@micro/utils'
import isArray from 'lodash-es/isArray'

export default function useFormItems(
  rawItems: Ref<FormItemType[]>,
  rawInitialValue: Record<string, any>,
): {
  mergeInitialValue: Record<string, any>
  items: Ref<FormItemType[]>
  genItems: (items: FormItemType[]) => FormItemType[]
} {
  const mergeInitialValue: Record<string, any> = { ...rawInitialValue }
  const items = ref<FormItemType[]>([])

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
          type: originItem.type,
          children: originItem.children,
          name: originItem.name,
          initialValue: originItem.initialValue,
          index: originItem.index,
          width: originItem.width,
          readonly: originItem.readonly,
          disabled: originItem.disabled,
          clearable: originItem.clearable,
          rules: originItem.rules,
          colProps: originItem.colProps,
          tooltip: originItem.tooltip || originItem.tip,
          fieldProps: originItem.fieldProps,
          formItemProps: originItem.formItemProps,
          render: originItem.render,
          renderFormItem: originItem.renderFormItem,
          renderText: originItem.renderText,
          request: originItem.request,
          params: originItem.params,
          transform: originItem.transform,
          convertValue: originItem.convertValue,
          onChange: originItem.onChange,
        })

        item.key = item.key || item.name?.toString() || index

        return item
      })
      .filter((field) => {
        return Boolean(field)
      })

  const genDefaultValue = (list: FormItemType[]) => {
    list.forEach((item) => {
      if (item.type === 'group' && isArray(item.children) && item.children.length > 0) {
        genDefaultValue(item.children)
      } else {
        if (item.name) {
          mergeInitialValue[item.name] = rawInitialValue[item.name] || item.initialValue
        }
      }
    })
  }

  genDefaultValue(rawItems.value)

  watchEffect(() => {
    items.value = genItems(rawItems.value)
  })

  return {
    items,
    genItems,
    mergeInitialValue,
  }
}
