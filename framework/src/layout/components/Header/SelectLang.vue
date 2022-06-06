<!--
 * @Author: shen
 * @Date: 2022-05-29 16:37:40
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:24:33
 * @Description: 
-->
<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { useStore } from '@/hooks'
import { useMicroI18n } from '@micro/hooks'
import { Message } from '@micro/utils'
import { computed } from 'vue'

const { state, dispatch } = useStore()
const { locale } = useMicroI18n()

const lang = computed(() => state.app.lang)

const list = [
  {
    lang: 'zh-cn',
    label: '简体中文',
    icon: '🇨🇳',
  },
  {
    lang: 'en',
    label: 'English',
    icon: '🇺🇸',
  },
]

const onCommand = async (command: string) => {
  locale.value = command
  dispatch('app/setAppLang', command)
  Message('Switch Language Success')
}
</script>

<template>
  <ElDropdown @command="onCommand">
    <span class="mc-layout__lang">
      <mc-svg-icon name="lang" />
    </span>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem style="width: 150px" v-for="item in list" :key="item.lang" :disabled="item.lang === lang" :command="item.lang">{{ item.icon }} {{ item.label }}</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style lang="scss" scoped>
.mc-layout__lang {
  cursor: pointer;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  vertical-align: middle;
  transition: all 0.3s;
  height: 48px;
  box-sizing: border-box;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
