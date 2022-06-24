<!--
 * @Author: shen
 * @Date: 2022-06-24 15:56:05
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 16:33:46
 * @Description: 
-->
<script setup lang="ts">
import clipboardCopy from 'clipboard-copy'
import { iconNames } from '@micro/icons'
import { Message } from '@micro/utils'
import { McSvgIcon } from '@micro/components'

const copyContent = async (content) => {
  try {
    await clipboardCopy(content)
    Message('复制成功')
  } catch {
    Message('复制失败', 'error')
  }
}

const copySvgIcon = async (name) => {
  await copyContent(`<McSvgIcon name="${name}" />`)
}
</script>

<template>
  <ul class="demo-icon-list">
    <li v-for="name in iconNames" :key="name" class="icon-item" @click="copySvgIcon(name)">
      <span class="demo-svg-icon">
        <McSvgIcon :name="name" />
        <span class="icon-name">{{ name }}</span>
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid var(--el-border-color);
  border-left: 1px solid var(--el-border-color);
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .icon-item {
    text-align: center;
    color: var(--el-text-color-regular);
    height: 90px;
    font-size: 13px;
    margin: 0;
    border-right: 1px solid var(--el-border-color);
    border-bottom: 1px solid var(--el-border-color);
    transition: background-color var(--el-transition-duration);
    &:hover {
      background-color: var(--el-border-color-extra-light);
      .el-icon {
        color: var(--brand-color-light);
      }
      color: var(--brand-color-light);
    }

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 20px;
      cursor: pointer;

      .icon-name {
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }
}
</style>
