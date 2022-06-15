<!--
 * @Author: shen
 * @Date: 2022-06-08 16:19:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 20:57:32
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { ElFormItem, ElTooltip } from 'element-plus'
import { RenderVNode, isFunction, omitUndefined } from '@micro/utils'
import { fieldComponentMap } from '../fieldMap'
import { useInjectForm } from '../context/FormContext'
import cloneDeep from 'lodash-es/cloneDeep'
import SvgIcon from '../../../SvgIcon'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const { formValues, updateValue, mode } = useInjectForm()

const cloneFormValues = computed(() => cloneDeep(formValues.value))

const FieldComponent = computed(() => fieldComponentMap[props.item.type!] || fieldComponentMap['input'])

const fieldProps = computed(() =>
  omitUndefined({
    type: props.item.type || 'text',
    clearable: props.item.clearable,
    readonly: props.item.readonly,
    placeholder: props.item.placeholder,
    options: props.item.options,
    name: props.item.name,
    fieldStyle: props.item.fieldStyle,
    request: props.item.request,
    params: props.item.params,
    onChange: props.item.onChange,
    fieldProps: props.item.fieldProps,
  }),
)

const disabled = computed(() => {
  if (isFunction(props.item.disabled)) {
    return props.item.disabled(cloneFormValues.value)
  }
  return props.item.disabled
})

const isCustomRender = computed(() => props.item.render && isFunction(props.item.render))
const isCustomRenderField = computed(() => props.item.renderField && isFunction(props.item.renderField))
</script>

<template>
  <ElFormItem :prop="item.name" :rules="mode === 'edit' ? item.rules : undefined" v-if="!isCustomRender" :style="{ width: item.width || 'auto' }">
    <template #label>
      <RenderVNode :vnode="item.label" :props="{ value: item.name ? cloneFormValues[item.name] : undefined, formValues: cloneFormValues }" />
      <ElTooltip v-if="item.tooltip" append-to="body" effect="dark" :content="item.tooltip" placement="top">
        <span style="margin-left: 5px; display: inline-block">
          <SvgIcon name="warning" />
        </span>
      </ElTooltip>
    </template>
    <template v-if="mode === 'edit'">
      <component v-if="!isCustomRenderField" :is="FieldComponent" v-bind="fieldProps" :disabled="disabled"></component>
      <RenderVNode v-else :vnode="item.renderField" :props="{ value: item.name, formValues: cloneFormValues, updateValue }" />
    </template>
  </ElFormItem>
  <RenderVNode v-else :vnode="item.render" :props="{ formValues: cloneFormValues }" />
</template>

<style scoped lang="scss"></style>