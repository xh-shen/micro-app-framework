<!--
 * @Author: shen
 * @Date: 2022-06-03 22:38:10
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 23:19:49
 * @Description: 
-->
<script setup lang="ts">
import Chart, { LineChartOption } from '@micro/charts'
import CountCard from './CountCard.vue'

const data = [
  { x: '2021-01-25', y: 42 },
  { x: '2021-01-26', y: 12 },
  { x: '2021-01-27', y: 34 },
  { x: '2021-01-28', y: 92 },
  { x: '2021-01-29', y: 12 },
  { x: '2021-01-30', y: 72 },
  { x: '2021-01-31', y: 53 },
  { x: '2021-02-01', y: 64 },
  { x: '2021-02-02', y: 55 },
  { x: '2021-02-03', y: 91 },
  { x: '2021-02-04', y: 62 },
  { x: '2021-02-05', y: 33 },
  { x: '2021-02-06', y: 14 },
  { x: '2021-02-07', y: 55 },
  { x: '2021-02-08', y: 36 },
  { x: '2021-02-09', y: 61 },
  { x: '2021-02-10', y: 58 },
]

const options: LineChartOption = {
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
  color: ['#13c2c2'],
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
      type: 'line',
      showSymbol: false,
      clip: false,
      smooth: true, // true 为平滑曲线，false为直线
    },
  ],
}
</script>

<template>
  <CountCard meta="运营活动效果" footerMeta="活动效果" :total="65" :footerTotal="20" :contentStyle="{ height: '100%' }" suffix="%" tip="运营活动效果">
    <Chart.Line :data="data.map((item) => Object.values(item))" :options="options" />
  </CountCard>
</template>

<style scoped lang="scss"></style>
