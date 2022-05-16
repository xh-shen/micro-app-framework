<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 22:09:05
 * @Description: 
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElButton } from 'element-plus'
import { useStore } from 'vuex'
const count = ref(0)
const { state } = useStore()
const userInfo = computed(() => state.userInfo)

const onAdd = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div>用户管理 {{ count }}</div>
  <ElButton @click="onAdd">+1</ElButton>
  <div>{{ userInfo }}</div>
</template>
