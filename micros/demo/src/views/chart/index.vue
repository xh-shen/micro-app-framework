<!--
 * @Author: shen
 * @Date: 2022-05-28 14:27:07
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 14:29:21
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'DemoChart',
}
</script>
<script setup lang="ts">
import BarChart from './components/BarChart.vue'
</script>

<template>
  <ElCard class="box-card">
    <template #header> 测试图表 </template>
    <BarChart />
  </ElCard>
</template>
