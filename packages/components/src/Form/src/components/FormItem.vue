<!--
 * @Author: shen
 * @Date: 2022-06-08 16:19:00
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 17:02:01
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { ElFormItem } from 'element-plus'
import { RenderVNode } from '@micro/utils'
import { fieldMap } from '../fieldMap'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const FieldComponent = computed(() => fieldMap[props.item.type || 'text'])
</script>

<template>
  <ElFormItem :prop="item.dataIndex" :rules="item.rules">
    <template #label>
      <RenderVNode :vnode="item.label" />
    </template>
    <component :is="FieldComponent" :item="item"></component>
  </ElFormItem>
</template>

<style scoped lang="scss"></style>
