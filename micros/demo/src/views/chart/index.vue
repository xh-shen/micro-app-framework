<!--
 * @Author: shen
 * @Date: 2022-05-28 14:27:07
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 11:14:23
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'DemoChart',
}
</script>
<script setup lang="ts">
import { McCard } from '@micro/components'
import BarChart from './components/BarChart.vue'
</script>

<template>
  <McCard title="测试图表">
    <BarChart />
  </McCard>
</template>
