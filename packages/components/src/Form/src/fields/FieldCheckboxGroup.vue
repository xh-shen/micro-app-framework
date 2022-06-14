<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 10:46:42
 * @Description: 
-->
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { commonFieldProps, Option } from '../interface'
import useFieldValue from '../hooks/useFieldValue'
const props = defineProps({
  ...commonFieldProps,
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
})

const options = computed(() => props.options)

const { fieldValue, onValueChange } = useFieldValue<Array<string | number>>(props.name)

const onChange = (value: any) => {
  onValueChange(value)
  props.onChange?.(value)
}
</script>

<template>
  <ElCheckboxGroup :model-value="fieldValue" :disabled="disabled" @change="onChange">
    <ElCheckbox v-for="opt in options" :key="(opt.value as any)" :label="opt.value" :disabled="opt.disabled">{{ opt.label || opt.text || opt.value }}</ElCheckbox>
  </ElCheckboxGroup>
</template>

<style scoped lang="scss"></style>
