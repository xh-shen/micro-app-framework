<!--
 * @Author: shen
 * @Date: 2022-06-09 08:00:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-17 15:54:45
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormItemType } from '../interface'
import FormGroup from './FormGroup.vue'
import FormItem from './FormItem.vue'
import FormLabel from './FormLabel.vue'

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
    <FormItem v-else :item="item" />
  </template>
</template>
