<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 16:25:37
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { ElInput } from 'element-plus'
import { omitKeysAndUndefined, pickKeys, RenderVNode } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps } from '../interface'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  ...commonFieldProps,
})

const elFieldProps = computed(() =>
  omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), ['renderPrefix', 'renderSuffix', 'renderPrepend', 'renderAppend', 'onFocus', 'onBlur', 'onInput', 'onClear']),
)

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
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @clear="onClear"
  >
    <template #prefix v-if="fieldProps.renderPrefix">
      <RenderVNode :vnode="fieldProps.renderPrefix" />
    </template>
    <template #suffix v-if="fieldProps.renderSuffix">
      <RenderVNode :vnode="fieldProps.renderSuffix" />
    </template>
    <template #prepend v-if="fieldProps.renderPrepend">
      <RenderVNode :vnode="fieldProps.renderPrepend" />
    </template>
    <template #append v-if="fieldProps.renderAppend">
      <RenderVNode :vnode="fieldProps.renderAppend" />
    </template>
  </ElInput>
</template>
