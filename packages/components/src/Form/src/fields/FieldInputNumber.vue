<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 21:57:40
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { ElInputNumber } from 'element-plus'
import { omitKeysAndUndefined, pickKeys } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  ...commonFieldProps,
})

const elFieldProps = computed(() => omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), ['onFocus', 'onBlur']))

const { fieldValue, onValueChange } = useFieldValue<number | undefined>(props.name)

const onChange = (value: number | undefined) => {
  onValueChange(value)
  props.onChange?.(value)
}

const onFocus = (event: Event) => {
  props.fieldProps?.onFocus?.(event)
}

const onBlur = (event: Event) => {
  props.fieldProps?.onBlur?.(event)
}
</script>

<template>
  <ElInputNumber v-model="fieldValue" v-bind="elFieldProps" :placeholder="placeholder || '请输入'" :disabled="disabled" style="width: 100%" @change="onChange" @focus="onFocus" @blur="onBlur" />
</template>
