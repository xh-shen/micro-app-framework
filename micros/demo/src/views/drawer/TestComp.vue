<!--
 * @Author: shen
 * @Date: 2022-06-04 17:22:13
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 21:47:01
 * @Description: 
-->
<script setup lang="ts">
import { useInjectDrawer } from '@micro/context'
import { ElMessageBox } from 'element-plus'

const { loading, drawerClose, onDrawerBeforeClose } = useInjectDrawer()
loading.value = true

const onClose = () => {
  drawerClose()
}

onDrawerBeforeClose(() => {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm('Are you sure you want to close this?')
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        reject(false)
      })
  })
})
</script>

<template>
  <div><ElButton @click="onClose">关闭</ElButton>></div>
</template>

<style scoped lang="scss"></style>
