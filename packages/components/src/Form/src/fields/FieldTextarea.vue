<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 09:58:23
 * @Description: 
-->

<script setup lang="ts">
import { computed } from 'vue'
import { ElInput } from 'element-plus'
import { omitKeysAndUndefined, pickKeys } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  ...commonFieldProps,
})

const elFieldProps = computed(() => omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), ['onFocus', 'onBlur', 'onInput', 'onClear']))

const { fieldValue, onValueChange } = useFieldValue<string | number>(props.name)

const onChange = (value: string | number) => {
  onValueChange(value)
  props.onChange?.(value)
}

const onFocus = (event: Event) => {
  props.fieldProps?.onFocus?.(event)
}

const onBlur = (event: Event) => {
  props.fieldProps?.onBlur?.(event)
}

const onInput = (value: string | number) => {
  props.fieldProps?.onInput?.(value)
}

const onClear = () => {
  props.fieldProps?.onClear?.()
}
</script>

<template>
  <ElInput
    v-model="fieldValue"
    v-bind="elFieldProps"
    :placeholder="placeholder || '请输入'"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :style="{ width: width || '100%' }"
    type="textarea"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @clear="onClear"
  />
</template>
