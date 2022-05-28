<!--
 * @Author: shen
 * @Date: 2022-05-15 22:34:01
 * @LastEditors: shen
 * @LastEditTime: 2022-05-26 14:26:58
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'Dashboard',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

const onAdd = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div>测试缓存 {{ count }}</div>
  <ElButton @click="onAdd">+1</ElButton>
</template>
