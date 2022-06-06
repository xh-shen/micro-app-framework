<!--
 * @Author: shen
 * @Date: 2022-05-15 22:34:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:42:33
 * @Description: 
-->

<script lang="ts">
export default {
  name: 'DemoTable',
}
</script>
<script setup lang="ts">
import { ElTable, ElTableColumn } from 'element-plus'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <ElTable :data="tableData" style="width: 100%">
    <ElTableColumn prop="date" label="Date" width="180" />
    <ElTableColumn prop="name" label="Name" width="180" />
    <ElTableColumn prop="address" label="Address" />
  </ElTable>
</template>
