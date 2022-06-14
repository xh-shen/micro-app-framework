<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 09:47:22
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { ElTimePicker } from 'element-plus'
import { omitKeysAndUndefined, pickKeys } from '@micro/utils'
import { fieldPropsMap, fieldDateFormatterMap } from '../fieldMap'
import { commonFieldProps, SingleOrRange } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

type DateModelValue = SingleOrRange<number | string | Date>

const props = defineProps({
  ...commonFieldProps,
})

const { fieldValue, onValueChange } = useFieldValue<DateModelValue>(props.name)

const elFieldProps = computed(() => omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), ['value-format', 'valueFormat', 'onBlur', 'onFocus', 'onVisibleChange']))

const valueFormat = computed(() => props.fieldProps?.fieldProps?.['value-format'] ?? props.fieldProps?.fieldProps?.['valueFormat'] ?? fieldDateFormatterMap[props.fieldProps?.type || 'time'])

const onChange = (value: any) => {
  onValueChange(value as DateModelValue)
  props.onChange?.(value)
}

const onFocus = (event: Event) => {
  props.fieldProps?.onFocus?.(event)
}

const onBlur = (event: Event) => {
  props.fieldProps?.onBlur?.(event)
}

const onVisibleChange = (visibility: boolean) => {
  props.fieldProps?.onVisibleChange?.(visibility)
}
</script>

<template>
  <ElTimePicker
    v-model="fieldValue"
    v-bind="elFieldProps"
    :placeholder="placeholder || '请选择'"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :style="{ width: width || '100%' }"
    :value-format="valueFormat"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @visible-change="onVisibleChange"
  />
</template>
