<!--
 * @Author: shen
 * @Date: 2022-05-15 22:34:01
 * @LastEditors: shen
 * @LastEditTime: 2022-05-27 10:31:24
 * @Description: 
-->
<template>
  <pro-table bordered :columns="columns" :pagination="false" :data-source="data"></pro-table>

  <pro-table bordered :columns="columns" :pagination="false" :data-source="data">
    <template #summary>
      <pro-table-summary-row>
        <pro-table-summary-cell :index="0">Sum</pro-table-summary-cell>
        <pro-table-summary-cell :index="1">
          <template #default="{ total }">
            <span style="color: red">{{ total }}</span>
          </template>
        </pro-table-summary-cell>
        <pro-table-summary-cell :index="2">
          <template #default="{ total }">
            {{ total }}
          </template>
        </pro-table-summary-cell>
        <pro-table-summary-cell :index="3">
          <template #default="{ total }">
            {{ total }}
          </template>
        </pro-table-summary-cell>
      </pro-table-summary-row>
      <pro-table-summary-row>
        <pro-table-summary-cell :index="0">Balance</pro-table-summary-cell>
        <pro-table-summary-cell :index="1">
          <template #default="{ total }">
            <span style="color: green">{{ total / data.length }}</span>
          </template>
        </pro-table-summary-cell>
        <pro-table-summary-cell :index="2" :col-span="2" align="center">
          <template #default>
            <span style="color: red">too low </span>
          </template>
        </pro-table-summary-cell>
      </pro-table-summary-row>
    </template>
  </pro-table>
</template>

<script lang="ts">
export default {
  name: 'Table',
}
</script>
<script setup lang="ts">
import { h } from 'vue'
interface DataItem {
  key: number
  name: string
  amount1: number
  amount2: number
  amount3: number
}
const columns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    summaryRender: () => {
      return 'Sum'
    },
  },
  {
    title: 'Amount1',
    dataIndex: 'amount1',
    summaryRender: ({ total }: any) => {
      return h(
        'div',
        {
          style: {
            color: 'red',
          },
        },
        total,
      )
    },
  },
  {
    title: 'Amount2',
    dataIndex: 'amount2',
    summaryRender: ({ total }: any) => {
      return total
    },
  },
  {
    title: 'Amount3',
    dataIndex: 'amount3',
    summaryRender: ({ total }: any) => {
      return total
    },
  },
]
const data: DataItem[] = []
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: 'Tom',
    amount1: 99 + i,
    amount2: 3.2,
    amount3: 10,
  })
}
</script>
