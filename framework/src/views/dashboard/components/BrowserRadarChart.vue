<!--
 * @Author: shen
 * @Date: 2022-06-04 08:29:50
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 10:04:53
 * @Description: 
-->
<script setup lang="ts">
import Chart, { RadarChartOption } from '@micro/charts'
import { Card } from '@micro/components'

function genSeries() {
  const series = []
  for (let i = 1; i <= 28; i++) {
    series.push({
      name: '浏览器（数据纯属虚构）',
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 1,
      },
      emphasis: {
        areaStyle: {
          color: 'rgba(0,250,0,0.3)',
        },
      },
      data: [
        {
          value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
          name: i + 2000 + '',
        },
      ],
    })
  }
  return series
}
const options = {
  title: {
    text: '',
    subtext: '纯属虚构',
    top: 10,
    left: 10,
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    bottom: 10,
    data: (function () {
      const list = []
      for (let i = 1; i <= 28; i++) {
        list.push(i + 2000 + '')
      }
      return list
    })(),
  },
  visualMap: {
    top: 'middle',
    right: 10,
    color: ['red', 'yellow'],
    calculable: true,
  },
  radar: {
    indicator: [{ name: 'IE8-' }, { name: 'IE9+' }, { name: 'Safari' }, { name: 'Firefox' }, { name: 'Chrome' }],
  },
  series: genSeries(),
} as RadarChartOption
</script>

<template>
  <Card title="浏览器占比变化" headerBorder style="margin-bottom: 15px">
    <template #extra>
      <ElDropdown placement="bottom-end">
        <mc-svg-icon name="more-fill"></mc-svg-icon>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>操作1</ElDropdownItem>
            <ElDropdownItem>操作2</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </template>
    <Chart.Radar :options="options" style="height: 400px" />
  </Card>
</template>

<style scoped lang="scss"></style>
