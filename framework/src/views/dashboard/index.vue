<!--
 * @Author: shen
 * @Date: 2022-05-15 22:34:01
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 15:43:06
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'Dashboard',
}
</script>
<script setup lang="ts">
import LineChart from './components/LineChart.vue'
</script>

<template>
  <ElCard class="box-card">
    <template #header> 测试图表 </template>
    <LineChart />
  </ElCard>
</template>
