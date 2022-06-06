<!--
 * @Author: shen
 * @Date: 2022-06-04 21:45:42
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:39:17
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import TestComp from './TestComp.vue'

const visible = ref(false)
</script>

<template>
  <div>
    <ElButton @click="visible = true">测试</ElButton>
  </div>
  <mc-drawer v-model="visible"> <TestComp /> </mc-drawer>
</template>

<style scoped lang="scss"></style>
