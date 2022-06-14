<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 16:39:49
 * @Description: 
-->
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ElCascader } from 'element-plus'
import { omitKeysAndUndefined, pickKeys } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps, CascaderOption, Request } from '../interface'
import useFieldValue from '../hooks/useFieldValue'
import useFieldOptions from '../hooks/useFieldOptions'

const props = defineProps({
  ...commonFieldProps,
  options: {
    type: Array as PropType<CascaderOption[]>,
    default: () => [],
  },
  request: Function as PropType<Request>,
  params: Object as PropType<Record<string, any>>,
})

const options = computed(() => props.options)
const params = computed(() => props.params)

const { finallyOptions } = useFieldOptions(options as any, props.request, params)

const elFieldProps = computed(() => omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), ['onBlur', 'onFocus', 'onRemoveTag', 'onVisibleChange', 'onExpandChange']))

const { fieldValue, onValueChange } = useFieldValue<any>(props.name)

const onChange = (value: any) => {
  onValueChange(value)
  props.onChange?.(value)
}

const onFocus = (event: Event) => {
  props.fieldProps?.onFocus?.(event)
}

const onBlur = (event: Event) => {
  props.fieldProps?.onBlur?.(event)
}

const onVisibleChange = (visibility: boolean) => {
  props.fieldProps?.onInput?.(visibility)
}

const onRemoveTag = (value: string | number | boolean | Record<string, any>) => {
  props.fieldProps?.onRemoveTag?.(value)
}

const onClear = () => {
  props.fieldProps?.onClear?.()
}
</script>

<template>
  <ElCascader
    v-model="fieldValue"
    v-bind="elFieldProps"
    :placeholder="placeholder || '请选择'"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :options="(finallyOptions as  CascaderOption[])"
    :style="{ width: width || '100%' }"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @clear="onClear"
    @remove-tag="onRemoveTag"
    @visible-change="onVisibleChange"
  />
</template>

<style scoped lang="scss"></style>
