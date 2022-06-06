<!--
 * @Author: shen
 * @Date: 2022-05-28 14:27:07
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:38:03
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'DemoChart',
}
</script>
<script setup lang="ts">
import { Card } from '@micro/components'
import BarChart from './components/BarChart.vue'
</script>

<template>
  <Card title="测试图表">
    <BarChart />
  </Card>
</template>
