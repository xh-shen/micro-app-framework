<!--
 * @Author: shen
 * @Date: 2022-06-18 08:17:28
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 08:43:19
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormLabel as FormLabelType } from '../interface'
import { ElDivider } from 'element-plus'
import FormItemWrapper from './FormItemWrapper.vue'
import FormLabel from './FormLabel.vue'

defineProps({
  label: [String, Number, Function] as PropType<FormLabelType>,
  fieldProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
})
</script>

<template>
  <FormItemWrapper :col-props="{ span: 24 }" style="width: 100%">
    <ElDivider content-position="left">
      <FormLabel :label="label" />
    </ElDivider>
  </FormItemWrapper>
</template>

<style scoped lang="scss"></style>
