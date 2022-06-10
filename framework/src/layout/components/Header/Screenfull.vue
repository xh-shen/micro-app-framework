<!--
 * @Author: shen
 * @Date: 2022-06-05 15:41:23
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:07:39
 * @Description: 
-->
<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { McSvgIcon } from '@micro/components'

const { isFullscreen, toggle } = useFullscreen()

const onScreenfull = () => {
  toggle()
}
</script>

<template>
  <span @click="onScreenfull">
    <span style="display: block; font-size: 16px; position: relative; top: -1px"> <McSvgIcon :name="isFullscreen ? 'exit-full' : 'full'" /> </span>
  </span>
</template>

<style scoped lang="scss"></style>
