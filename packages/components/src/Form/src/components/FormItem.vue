<!--
 * @Author: shen
 * @Date: 2022-06-08 16:19:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-12 16:22:40
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { ElFormItem, ElTooltip } from 'element-plus'
import { RenderVNode, isFunction } from '@micro/utils'
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

const { formValues, updateValue } = useInjectForm()

const cloneFormValues = computed(() => cloneDeep(formValues.value))

const FieldComponent = computed(() => fieldComponentMap[props.item.type || 'text'] || fieldComponentMap['text'])

const fieldProps = computed(() => ({
  type: props.item.type || 'text',
  disabled: props.item.disabled,
  clearable: props.item.clearable,
  readonly: props.item.readonly,
  placeholder: props.item.placeholder,
  name: props.item.name,
  width: props.item.width,
  onChange: props.item.onChange,
  fieldProps: props.item.fieldProps,
}))

const isCustomRender = computed(() => props.item.render && isFunction(props.item.render))
const isCustomRenderField = computed(() => props.item.renderField && isFunction(props.item.renderField))
</script>

<template>
  <ElFormItem :prop="item.name" :rules="item.rules" v-if="!isCustomRender">
    <template #label>
      <RenderVNode :vnode="item.label" :props="{ value: item.name ? cloneFormValues[item.name] : undefined, formValues: cloneFormValues }" />
      <ElTooltip v-if="item.tooltip" append-to="body" effect="dark" :content="item.tooltip" placement="top">
        <span style="margin-left: 5px; display: inline-block">
          <SvgIcon name="warning" />
        </span>
      </ElTooltip>
    </template>
    <component v-if="!isCustomRenderField" :is="FieldComponent" v-bind="fieldProps"></component>
    <RenderVNode v-else :vnode="item.renderField" :props="{ value: item.name, formValues: cloneFormValues, updateValue }" />
  </ElFormItem>
  <RenderVNode v-else :vnode="item.render" :props="{ formValues: cloneFormValues }" />
</template>

<style scoped lang="scss"></style>
