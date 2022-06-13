<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 23:13:27
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { ElDatePicker } from 'element-plus'
import { omitKeysAndUndefined, pickKeys, RenderVNode } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps, SingleOrRange } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

type DateModelValue = SingleOrRange<number | string | Date>

const props = defineProps({
  ...commonFieldProps,
})

const { fieldValue, onValueChange } = useFieldValue<DateModelValue>(props.name)

const elFieldProps = computed(() =>
  omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), [
    'renderDefault',
    'renderRangeSeparator',
    'onBlur',
    'onFocus',
    'onCalendarChange',
    'onPanelChange',
    'onVisibleChange',
  ]),
)

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

const onCalendarChange = (val: [Date, Date]) => {
  props.fieldProps?.onCalendarChange?.(val)
}

const onPanelChange = (date: any, mode: any, view: any) => {
  props.fieldProps?.onPanelChange?.(date, mode, view)
}

const onVisibleChange = (visibility: boolean) => {
  props.fieldProps?.onVisibleChange?.(visibility)
}
</script>

<template>
  <ElDatePicker
    class="mc-form__field-date"
    v-model="fieldValue"
    v-bind="elFieldProps"
    :placeholder="placeholder || '请选择'"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :style="{ width: width || '100%' }"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @calendar-change="onCalendarChange"
    @panel-change="onPanelChange"
    @visible-change="onVisibleChange"
  >
    <RenderVNode v-if="fieldProps.renderDefault" :vnode="fieldProps.renderDefault" />
    <template #range-separator v-if="fieldProps.renderRangeSeparator">
      <RenderVNode :vnode="fieldProps.renderRangeSeparator" />
    </template>
  </ElDatePicker>
</template>
