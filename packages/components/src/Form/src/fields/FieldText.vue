<!--
 * @Author: shen
 * @Date: 2022-06-09 10:11:53
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 10:37:13
 * @Description: 
-->
<script setup lang="ts">
import type { FormItemType } from '../interface'
import type { PropType } from 'vue'
import { ref, watchEffect } from 'vue'
import { ElInput } from 'element-plus'
import { useInjectForm } from '../context/FormContext'

const props = defineProps({
  item: {
    type: Object as PropType<FormItemType>,
    required: true,
  },
})

const { formValue } = useInjectForm()

const textValue = ref('')

const onChange = (value: string) => {
  formValue.value[props.item.dataIndex!] = value
}

watchEffect(() => {
  textValue.value = formValue.value[props.item.dataIndex!]
})
</script>

<template>
  <ElInput v-model="textValue" @change="onChange" :clearable="item.clearable" :disabled="item.disabled"></ElInput>
</template>

<style scoped lang="scss"></style>
