<!--
 * @Author: shen
 * @Date: 2022-06-15 09:58:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-15 10:08:57
 * @Description: 
-->
<script setup lang="ts">
import { ElCol, ElFormItem, ElButton } from 'element-plus'

const emit = defineEmits(['submit', 'reset'])

const onSubmit = () => {
  emit('submit')
}

const onReset = () => {
  emit('reset')
}
</script>

<template>
  <ElCol :span="24">
    <ElFormItem label=" ">
      <ElButton @click="onSubmit" type="primary">提交</ElButton>
      <ElButton @click="onReset">重置</ElButton>
    </ElFormItem>
  </ElCol>
</template>
