<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 09:49:52
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'

const count = ref(0)
const onAdd = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div>用户管理 {{ count }}</div>
  <ElButton @click="onAdd">+1</ElButton>
</template>
