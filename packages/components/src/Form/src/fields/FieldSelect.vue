<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 16:35:23
 * @Description: 
-->
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { omitKeysAndUndefined, pickKeys, RenderVNode } from '@micro/utils'
import { fieldPropsMap } from '../fieldMap'
import { commonFieldProps, Option, Request } from '../interface'
import useFieldValue from '../hooks/useFieldValue'
import useFieldOptions from '../hooks/useFieldOptions'
const props = defineProps({
  ...commonFieldProps,
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  request: Function as PropType<Request>,
  params: Object as PropType<Record<string, any>>,
})

const options = computed(() => props.options)
const params = computed(() => props.params)

const elFieldProps = computed(() =>
  omitKeysAndUndefined(pickKeys(props.fieldProps || {}, fieldPropsMap[props.type]!), ['renderOption', 'onBlur', 'onFocus', 'onClear', 'onRemoveTag', 'onVisibleChange']),
)

const { finallyOptions } = useFieldOptions(options, props.request, params)
const { fieldValue, onValueChange } = useFieldValue<string | number | boolean | Record<string, any>>(props.name)

const onChange = (value: string | number | boolean | Record<string, any>) => {
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
  <ElSelect
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
    @clear="onClear"
    @remove-tag="onRemoveTag"
    @visible-change="onVisibleChange"
  >
    <ElOption v-for="opt in finallyOptions" :key="(opt.value as any)" :label="((opt.label || opt.text || opt.value) as string)" :disabled="opt.disabled" :value="opt.value">
      <RenderVNode v-if="fieldProps.renderOption" :vnode="fieldProps.renderOption" :props="{ item: opt, value: fieldValue }" />
    </ElOption>
  </ElSelect>
</template>

<style scoped lang="scss"></style>
