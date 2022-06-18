<!--
 * @Author: shen
 * @Date: 2022-06-17 13:11:07
 * @LastEditors: shen
 * @LastEditTime: 2022-06-18 08:40:46
 * @Description: 
-->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormPosition, FormTab, Key } from '../interface'
import { computed } from 'vue'
import { classNames } from '@micro/utils'
import FormLabel from './FormLabel.vue'

const props = defineProps({
  activeKey: {
    type: [Number, String] as PropType<Key>,
  },
  list: {
    type: Array as PropType<FormTab[]>,
    default: () => [],
  },
  position: {
    type: String as PropType<FormPosition>,
    default: 'left',
  },
})

const tabsCls = computed(() =>
  classNames({
    'mc-form__tabs': true,
    'is-left': props.position === 'left',
    'is-right': props.position === 'right',
    'is-top': props.position === 'top',
  }),
)

const tabsWrapCls = computed(() =>
  classNames({
    'mc-form__tabs-nav-wrap': true,
    'is-left': props.position === 'left',
    'is-right': props.position === 'right',
    'is-top': props.position === 'top',
  }),
)

const onClick = (item: FormTab) => {
  item.el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div :class="tabsCls">
    <div :class="tabsWrapCls">
      <div :class="['mc-form__tabs-item', activeKey === tab.key ? 'is-active' : '']" v-for="tab in list" :key="tab.key" @click="onClick(tab)">
        <FormLabel :label="tab.label" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
