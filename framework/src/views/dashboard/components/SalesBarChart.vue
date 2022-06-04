<!--
 * @Author: shen
 * @Date: 2022-06-04 08:03:10
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 08:41:02
 * @Description: 
-->
<script setup lang="ts">
import Chart, { BarLineChartOption } from '@micro/charts'
import { Card } from '@micro/components'

const data = [
  { product: 'product', item1: 'Milk Tea', item2: 'Ma LiYa' },
  { x: '1月', y: 265, y1: 321 },
  { x: '2月', y: 1173, y1: 345 },
  { x: '3月', y: 779, y1: 532 },
  { x: '4月', y: 1170, y1: 123 },
  { x: '5月', y: 1014, y1: 565 },
  { x: '6月', y: 270, y1: 1241 },
  { x: '7月', y: 1083, y1: 234 },
  { x: '8月', y: 254, y1: 876 },
  { x: '9月', y: 342, y1: 456 },
  { x: '10月', y: 280, y1: 345 },
  { x: '11月', y: 551, y1: 134 },
  { x: '12月', y: 337, y1: 834 },
]

const options: BarLineChartOption = {
  grid: {
    top: '35',
    left: '40',
    right: '5',
    bottom: '20',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(0,0,0,.5)',
      },
    },
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  series: [
    {
      type: 'bar',
      barMaxWidth: 40,
    },
    {
      type: 'line',
    },
  ],
}
</script>

<template>
  <Card title="销售额" headerBorder style="margin-bottom: 15px" class="chart-sales">
    <template #extra>
      <div style="width: 350px; position: relative">
        <ElDatePicker :modelValue="['2021-01-20', '2021-02-10']" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
      </div>
    </template>
    <ElRow :gutter="15">
      <ElCol v-bind="{ lg: 18, md: 16, xs: 24 }">
        <h3 class="chart-sales-title">销售趋势</h3>
        <div class="chart-sales-chart"><Chart.BarLine :data="data.map((item) => Object.values(item))" :options="options" /></div>
      </ElCol>
      <ElCol v-bind="{ lg: 6, md: 8, xs: 24 }">
        <h3 class="chart-sales-title">门店销售排名</h3>
        <div class="chart-sales-list">
          <div class="chart-sales-list-item" v-for="index in 8" :key="index">
            <span class="chart-sales-list-index" :style="{ color: index < 4 ? '#fff' : 'rgba(0,0,0,.85)', backgroundColor: index < 4 ? '#314659' : '#fafafa' }"> {{ index }} </span>
            <span style="flex: 1">红旗街{{ index }}号门店</span>
            <span>234,239</span>
          </div>
        </div>
      </ElCol>
    </ElRow>
  </Card>
</template>

<style scoped lang="scss">
.chart-sales {
  &-title {
    margin: 10px 0 20px 5px;
    font-weight: 400;
  }
  &-chart {
    height: 295px;
    margin-bottom: 15px;
  }
  &-list {
    height: 295px;
    margin-bottom: 10px;
    padding-right: 10px;
    align-items: center;
    &-item {
      display: flex;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.85);
      margin-top: 16px;
    }
    &-index {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 1.5px;
      margin-right: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: #fafafa;
      border-radius: 20px;
    }
  }
}
</style>
