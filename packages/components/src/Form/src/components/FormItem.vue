<!--
 * @Author: shen
 * @Date: 2022-06-08 16:19:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 22:14:40
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { ElFormItem } from 'element-plus'
import { RenderVNode } from '@micro/utils'
import { fieldComponentMap } from '../fieldMap'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const FieldComponent = computed(() => fieldComponentMap[props.item.type || 'text'])

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
</script>

<template>
  <ElFormItem :prop="item.name" :rules="item.rules">
    <template #label>
      <RenderVNode :vnode="item.label" />
    </template>
    <component :is="FieldComponent" v-bind="fieldProps" :item="item"></component>
  </ElFormItem>
</template>

<style scoped lang="scss"></style>
