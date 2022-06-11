<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 13:31:32
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { ElInput } from 'element-plus'
import useFieldValue from '../hooks/useFieldValue'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const { fieldValue, onValueChange } = useFieldValue(props.item)

const onChange = (value: string) => {
  onValueChange(value)
}
</script>

<template>
  <ElInput v-model="fieldValue" @change="onChange" :clearable="item.clearable" :disabled="item.disabled" :style="{ width: item.width || '100%' }"></ElInput>
</template>

<style scoped lang="scss"></style>
