<!--
 * @Author: shen
 * @Date: 2022-05-28 13:56:12
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 14:31:12
 * @Description: 
-->
<script setup lang="ts">
import Chart, { BarChartOption } from '@micro/charts'
const options: BarChartOption = {
  // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
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
    data: ['bar 1', 'bar 2', 'bar 3', 'bar 4', 'bar 5'],
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
      name: 'bar 1',
      type: 'bar',
      data: [432, 134, 643, 264, 567, 340, 352],
    },
    {
      name: 'bar 2',
      type: 'bar',
      data: [120, 122, 234, 234, 220, 340, 310],
    },
    {
      name: 'bar 3',
      type: 'bar',
      data: [320, 425, 201, 334, 543, 130, 220],
    },
    {
      name: 'bar 4',
      type: 'bar',
      data: [220, 647, 231, 123, 190, 654, 120],
    },
    {
      name: 'bar 5',
      type: 'bar',
      data: [124, 302, 23, 234, 456, 290, 643],
    },
  ],
}
</script>

<template>
  <Chart.Bar :options="options" style="height: 400px" />
</template>
