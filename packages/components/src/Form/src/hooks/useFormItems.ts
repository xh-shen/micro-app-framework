/*
 * @Author: shen
 * @Date: 2022-06-08 16:35:27
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 21:20:06
 * @Description:
 */
import type { Ref, ComputedRef } from 'vue'
import type { FormItemType, FormLayout, SpanConfig } from '../interface'
import { ref, computed, watch } from 'vue'
import { isFunction, omitUndefined } from '@micro/utils'
import { useMergedState } from '@micro/hooks'
import { getSpanConfig } from '../utils'
import { fieldDefaultValueMap } from '../fieldMap'

export default function useFormItems(
  rawItems: Ref<FormItemType[]>,
  span: ComputedRef<SpanConfig | undefined>,
  layout: ComputedRef<FormLayout>,
): {
  width: Ref<number>
  items: Ref<FormItemType[]>
  genItems: (items: FormItemType[]) => FormItemType[]
  setWidth: (width: number) => void
  fieldInitialValues: ComputedRef<Record<string, any>>
} {
  // const currentSpan = ref(0)
  // const totalSpan = ref(0)
  // const totalSize = ref(0)
  const items = ref<FormItemType[]>([])

  const [width, setWidth] = useMergedState(() => document?.body?.clientWidth as number)

  const spanSize = computed(() => getSpanConfig(layout.value, width.value + 16, span.value))

  const fieldInitialValues = computed(() => {
    const values: Record<string, any> = {}
    rawItems.value.forEach((item) => {
      if (item.name) {
        if (typeof item.initialValue !== 'undefined') {
          values[item.name] = item.initialValue
        } else {
          const defaultValueMap = fieldDefaultValueMap[item.type || 'input']
          values[item.name] = typeof defaultValueMap !== 'undefined' ? (isFunction(defaultValueMap) ? defaultValueMap(item.fieldProps) : defaultValueMap) : undefined
        }
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
        const colSize = originItem.colSize ?? 1
        const colSpan = Math.min(spanSize.value.span * (colSize || 1), 24)

        const item = omitUndefined({
          label: originItem.label,
          key: originItem.key,
          type: originItem.type || 'input',
          name: originItem.name,
          initialValue: originItem.initialValue,
          width: originItem.width,
          fieldStyle: originItem.fieldStyle,
          readonly: originItem.readonly,
          disabled: originItem.disabled,
          clearable: originItem.clearable,
          options: originItem.options,
          rules: originItem.rules,
          colProps: { span: colSpan },
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

  watch([spanSize, () => rawItems.value], () => {
    // currentSpan.value = 0
    // totalSize.value = 0
    // totalSpan.value = 0
    items.value = genItems(rawItems.value)
  })

  return {
    width,
    items,
    genItems,
    setWidth,
    fieldInitialValues,
  }
}
