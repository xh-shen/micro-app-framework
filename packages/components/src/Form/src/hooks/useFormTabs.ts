/*
 * @Author: shen
 * @Date: 2022-06-17 15:35:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-21 09:58:02
 * @Description:
 */
import type { Ref, ComputedRef } from 'vue'
import type { FormLayoutType } from '../interface'
import { watch } from 'vue'
import type { FormTab, Key } from '../interface'
import { ref } from 'vue'
import { setPromise } from '@micro/utils'

export default function useFormTabs(layoutType: ComputedRef<FormLayoutType>): {
  tabKey: Ref<Key>
  formTabs: Ref<FormTab[]>
  addTab: (tab: FormTab) => void
  clearTab: () => void
  updateTabKey: (key: Key) => void
  updateTabKeyOnScroll: (top: number) => void
} {
  const tabKey = ref<Key>('')
  const formTabs = ref<FormTab[]>([])

  const addTab = (tab: FormTab) => {
    const index = formTabs.value.findIndex((item) => item.key === tab.key)
    if (index > -1) {
      formTabs.value.splice(index, 1, tab)
    } else {
      formTabs.value.push(tab)
    }
  }

  const clearTab = () => {
    tabKey.value = ''
    formTabs.value = []
  }

  const updateTabKey = (key: Key) => {
    tabKey.value = key
  }

  const updateTabKeyOnScroll = (top = 0) => {
    formTabs.value.forEach((tab) => {
      if (top >= tab.el.offsetTop - 30) {
        updateTabKey(tab.key)
      }
    })
  }

  if (layoutType.value === 'TabsForm') {
    let cancelCreate: () => void
    watch(
      () => formTabs.value,
      () => {
        cancelCreate && cancelCreate()
        cancelCreate = setPromise(updateTabKeyOnScroll).cancel
      },
      { immediate: true, deep: true },
    )
  }

  return {
    tabKey,
    formTabs,
    addTab,
    clearTab,
    updateTabKey,
    updateTabKeyOnScroll,
  }
}
