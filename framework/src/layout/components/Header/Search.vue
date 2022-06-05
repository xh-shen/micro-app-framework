<!--
 * @Author: shen
 * @Date: 2022-06-05 14:56:56
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 15:26:14
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
import { on, off } from '@micro/utils'
const spanEl = ref<HTMLElement>()
const keyword = ref<string>('test')
const show = ref<boolean>(false)

const handle = (e: Event) => {
  if (!spanEl.value?.contains(e.target as HTMLElement)) {
    show.value = false
    off(document, 'click', handle)
  }
}

const list = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
]

const querySearch = (queryString: string, cb: (list: any[]) => void) => {
  const results = queryString ? list.filter((item) => item.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1) : list
  cb(results)
}

const onShow = () => {
  if (!show.value) {
    show.value = true
    setTimeout(() => {
      on(document, 'click', handle)
    }, 0)
  }
}
</script>

<template>
  <span>
    <mc-svg-icon name="search" @click="onShow" />
    <span ref="spanEl" :class="['mc-layout__search-input', show ? 'show' : '']">
      <ElAutocomplete name="search" :fetch-suggestions="querySearch" v-model="keyword" placeholder="请输入" />
    </span>
  </span>
</template>

<style scoped lang="scss">
.mc-layout__search-input {
  display: inline-flex;
  align-items: center;
  width: 0;
  margin-left: 0;
  border-bottom: 1px solid #d9d9d9;
  transition: all 0.3s;
  &.show {
    width: 210px;
    margin-left: 8px;
  }
  :deep(.el-autocomplete) {
    width: 100%;
    height: 100%;
    line-height: normal;
    .el-input__wrapper {
      border-radius: 0;
      padding-right: 0;
      padding-left: 0;
      border: 0;
      line-height: normal;
      height: 29px;
      box-shadow: none !important;
    }
  }
}
</style>
