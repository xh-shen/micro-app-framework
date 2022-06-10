/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: shen
 * @Date: 2022-03-01 14:44:28
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 10:23:48
 * @Description:
 */

import { onMounted, nextTick, onUnmounted, Ref } from 'vue'
import elementResize from 'element-resize-detector'
import throttle from 'lodash-es/throttle'

export function useElementResize(dom: Ref<HTMLElement | null>, handler: any = null) {
  let erdUltraFast: any

  if (!erdUltraFast) {
    erdUltraFast = elementResize({
      strategy: 'scroll',
      callOnAdd: true,
    })
  }

  const cb = throttle(handler)

  onMounted(() => {
    nextTick(() => {
      if (dom.value) {
        erdUltraFast && erdUltraFast.listenTo(dom.value, cb)
      }
    })
  })
  onUnmounted(() => {
    if (dom.value) {
      erdUltraFast && erdUltraFast.removeListener(dom.value, cb)
    }
  })
}
