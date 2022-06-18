<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 09:30:49
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormItemType } from '../interface'
import FormGroup from './FormGroup.vue'
import FormDivider from './FormDivider.vue'
import FormItem from './FormItem.vue'

defineProps({
  list: {
    type: Array as PropType<FormItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <template v-for="item in list" :key="item.key">
    <FormGroup v-if="item.type === 'group'" :label="item.label" :group-key="item.key" :field-props="item.fieldProps" :tooltip="item.tooltip" />
    <FormDivider v-else-if="item.type === 'divider'" :label="item.label" :field-props="item.fieldProps" />
    <FormItem v-else :item="item" />
  </template>
</template>
