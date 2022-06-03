<!--
 * @Author: shen
 * @Date: 2022-06-03 22:38:10
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 23:14:15
 * @Description: 
-->
<script setup lang="ts">
import Chart, { BarChartOption } from '@micro/charts'
import CountCard from './CountCard.vue'

const data = [
  { x: '2021-01-25', y: 7 },
  { x: '2021-01-26', y: 5 },
  { x: '2021-01-27', y: 4 },
  { x: '2021-01-28', y: 2 },
  { x: '2021-01-29', y: 4 },
  { x: '2021-01-30', y: 7 },
  { x: '2021-01-31', y: 5 },
  { x: '2021-02-01', y: 6 },
  { x: '2021-02-02', y: 5 },
  { x: '2021-02-03', y: 9 },
  { x: '2021-02-04', y: 6 },
  { x: '2021-02-05', y: 3 },
  { x: '2021-02-06', y: 1 },
  { x: '2021-02-07', y: 5 },
  { x: '2021-02-08', y: 3 },
  { x: '2021-02-09', y: 6 },
  { x: '2021-02-10', y: 5 },
]

const options: BarChartOption = {
  legend: {
    show: false,
  },
  grid: {
    top: '10',
    left: '5',
    right: '5',
    bottom: '0',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
  },
  color: ['#409EFF'],
  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'bar',
      clip: false,
      barMaxWidth: 20,
    },
  ],
}
</script>

<template>
  <CountCard meta="支付笔数" footerMeta="转化率" :total="8765" :footerTotal="56" :contentStyle="{ height: '100%' }" footerSuffix="%" tip="支付笔数">
    <Chart.Bar :data="data.map((item) => Object.values(item))" :options="options" />
  </CountCard>
</template>

<style scoped lang="scss"></style>
