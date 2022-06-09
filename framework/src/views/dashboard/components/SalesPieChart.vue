<!--
 * @Author: shen
 * @Date: 2022-06-04 08:30:08
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 11:13:32
 * @Description: 
-->
<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import Chart, { PieChartOption } from '@micro/charts'
import { McCard } from '@micro/components'

const data = [
  {
    key1: '直达',
    key2: 335,
    key3: 123,
  },
  {
    key1: '营销广告',
    key2: 679,
    key3: 121,
  },
  {
    key1: '搜索引擎',
    key2: 153,
    key3: 234,
  },
  {
    key1: '百度',
    key2: 233,
    key3: 148,
  },
  {
    key1: '谷歌',
    key2: 451,
    key3: 251,
  },
]

const options: PieChartOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    align: 'left',
    left: 0,
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, 70],
      itemStyle: {
        borderRadius: 4,
        borderColor: '#fff',
        borderWidth: 2,
      },
      minShowLabelAngle: 1,
      encode: {
        itemName: 'key1',
        value: 'key2',
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
        },
      },
      labelLine: {
        show: false,
      },
    },
    {
      name: '访问来源',
      type: 'pie',
      radius: [110, 140],
      minShowLabelAngle: 1,
      itemStyle: {
        borderRadius: 4,
        borderColor: '#fff',
        borderWidth: 2,
      },
      encode: {
        itemName: 'key1',
        value: 'key3',
      },
    },
  ],
}
</script>

<template>
  <McCard title="访问来源占比" headerBorder style="margin-bottom: 15px">
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
    <Chart.Pie :data="data" :options="options" style="height: 400px" />
  </McCard>
</template>

<style scoped lang="scss"></style>
