<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-05-27 13:28:25
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'User',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalData } from '@micro/hooks'
const count = ref(0)
const { userInfo } = useGlobalData()

const onAdd = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div>用户管理 {{ count }}</div>
  <ElButton @click="onAdd">+1</ElButton>
  <div>{{ userInfo }}</div>
</template>
