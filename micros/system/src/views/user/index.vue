<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-08-12 09:54:51
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'User',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { useGlobalData } from '@micro/hooks'
const count = ref(0)
const { userInfo } = useGlobalData()

const onAdd = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div class="test">用户管理 {{ count }}</div>
  <ElButton @click="onAdd">+1</ElButton>
  <div>{{ userInfo }}</div>
</template>

<style lang="scss" scoped>
@use '@micro/theme/common/var' as *;

.test {
  color: $color-text-regular;
}
</style>
