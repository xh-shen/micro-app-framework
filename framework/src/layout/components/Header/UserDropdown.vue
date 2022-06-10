<!--
 * @Author: shen
 * @Date: 2022-06-05 16:21:43
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:08:29
 * @Description: 
-->
<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { McSvgIcon } from '@micro/components'
import { useStore } from '@/hooks'
import { useRouter } from 'vue-router'
import { useInjectLayout } from '../../context/LayoutContext'
import logo from '@/assets/images/logo.png'

const router = useRouter()
const { state, dispatch } = useStore()
const { activePath } = useInjectLayout()

const onCommand = async (command: string) => {
  switch (command) {
    case 'logout':
      await dispatch('user/logout')
      router.replace(`/login?redirect=${activePath.value}`)
      break
  }
}
</script>

<template>
  <ElDropdown @command="onCommand">
    <span class="mc-layout__user">
      <span class="mc-layout__user-avatar">
        <img :src="logo" alt="" />
      </span>
      {{ state.user.userInfo.username }}
    </span>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem style="width: 150px"><McSvgIcon name="user" style="margin-right: 8px" />用户信息</ElDropdownItem>
        <ElDropdownItem style="width: 150px"><McSvgIcon name="setting" style="margin-right: 8px" />用户设置</ElDropdownItem>
        <ElDropdownItem style="width: 150px" divided command="logout"><McSvgIcon name="logout" style="margin-right: 8px" />退出登录</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style scoped lang="scss">
.mc-layout__user {
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
  &-avatar {
    display: inline-block;
    overflow: hidden;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    margin-right: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
