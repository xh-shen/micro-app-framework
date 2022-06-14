<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 10:46:54
 * @Description: 
-->
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
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

const { finallyOptions } = useFieldOptions(options, props.request, params)

const { fieldValue, onValueChange } = useFieldValue<string | number | boolean>(props.name)

const onChange = (value: string | number | boolean) => {
  onValueChange(value)
  props.onChange?.(value)
}
</script>

<template>
  <ElRadioGroup :model-value="fieldValue" :disabled="disabled" @change="onChange">
    <ElRadio v-for="opt in finallyOptions" :key="(opt.value as any)" :label="opt.value" :disabled="opt.disabled">{{ opt.label || opt.text || opt.value }}</ElRadio>
  </ElRadioGroup>
</template>

<style scoped lang="scss"></style>
