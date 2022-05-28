<!--
 * @Author: shen
 * @Date: 2022-05-28 13:56:12
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 14:17:13
 * @Description: 
-->
<script setup lang="ts">
import Chart, { LineChartOption } from '@micro/charts'
const options: LineChartOption = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '10',
    right: '10',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      showSymbol: false,
      data: [432, 134, 643, 264, 567, 340, 352],
    },
    {
      name: 'Line 2',
      type: 'line',
      showSymbol: false,
      data: [120, 122, 234, 234, 220, 340, 310],
    },
    {
      name: 'Line 3',
      type: 'line',
      showSymbol: false,
      data: [320, 425, 201, 334, 543, 130, 220],
    },
    {
      name: 'Line 4',
      type: 'line',
      showSymbol: false,
      data: [220, 647, 231, 123, 190, 654, 120],
    },
    {
      name: 'Line 5',
      type: 'line',
      showSymbol: false,
      data: [124, 302, 23, 234, 456, 290, 643],
    },
  ],
}
</script>

<template>
  <Chart.Line :options="options" style="height: 400px" />
</template>
