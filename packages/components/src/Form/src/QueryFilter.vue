<!--
 * @Author: shen
 * @Date: 2022-06-14 22:59:50
 * @LastEditors: shen
 * @LastEditTime: 2022-06-16 10:59:23
 * @Description: 
-->
<script lang="ts">
import type { FormItemType, FormLayout } from './interface'
import { defineComponent, computed, ref, watch } from 'vue'
import { ElCol, ElButton, ElFormItem, ElLink, ElSpace } from 'element-plus'
import { useMergedState } from '@micro/hooks'
import { resize } from '@micro/directives'
import { queryFilterProps } from './interface'
import BaseForm from './Form.vue'
import SvgIcon from '../../SvgIcon'

const CONFIG_SPAN_BREAKPOINTS: any = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 992,
  xl: 1057,
  xxl: Infinity,
}

const BREAKPOINTS: any = {
  vertical: [
    [513, 1, 'vertical'],
    [785, 2, 'vertical'],
    [1057, 3, 'vertical'],
    [Infinity, 4, 'vertical'],
  ],
  default: [
    [513, 1, 'vertical'],
    [701, 2, 'vertical'],
    [1062, 3, 'horizontal'],
    [1352, 3, 'horizontal'],
    [Infinity, 4, 'horizontal'],
  ],
}

const getSpanConfig = (layout: FormLayout, width: number, span?: any): { span: number; layout: FormLayout } => {
  if (span && typeof span === 'number') {
    return {
      span,
      layout,
    }
  }

  const spanConfig = span ? ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((key: any) => [CONFIG_SPAN_BREAKPOINTS[key], 24 / span[key], 'horizontal']) : BREAKPOINTS[layout || 'default']

  const breakPoint = (spanConfig || BREAKPOINTS.default).find((item: [number, number, FormLayout]) => width < item[0] + 16)
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2],
  }
}

export default defineComponent({
  name: 'McQueryFilter',
  props: queryFilterProps,
  directives: {
    resize,
  },
  components: { BaseForm, ElCol, ElButton, ElFormItem, ElLink, ElSpace, SvgIcon },
  emits: ['collapse', 'finish', 'reset', 'resizeheight'],
  setup(props, { emit }) {
    const currentSpan = ref(0)
    const totalSpan = ref(0)
    const totalSize = ref(0)
    const formRef = ref<any>()
    const processedList = ref<FormItemType[]>([])

    const [width, setWidth] = useMergedState(() => document?.body?.clientWidth as number)
    const [height, setHeight] = useMergedState(() => 0)
    const [collapsed, setCollapsed] = useMergedState<boolean | undefined>(() => props.defaultCollapsed, {
      value: computed(() => props.collapsed),
      onChange: (val) => {
        emit('collapse', val)
      },
    })

    const spanSize = computed(() => getSpanConfig(props.layout, width.value + 16, props.span))
    const showLength = computed(() => {
      if (props.defaultColsNumber !== undefined) {
        return props.defaultColsNumber
      }
      return Math.max(1, 24 / spanSize.value.span)
    })

    const hiddenNum = computed(() => props.showHiddenNum && processedList.value.filter((item) => item.hidden).length)

    watch([spanSize, collapsed, () => props.formItems], () => {
      let firstRowFull = false
      currentSpan.value = 0
      totalSize.value = 0
      totalSpan.value = 0
      processedList.value = props.formItems.map((item, index) => {
        const colSize = item.colSize ?? 1
        const colSpan = Math.min(spanSize.value.span * (colSize || 1), 24)
        totalSpan.value += colSpan
        totalSize.value += colSize

        if (index === 0) {
          firstRowFull = colSpan === 24 && !item.hidden
        }

        const hidden: boolean = item.hidden || (!!collapsed.value && (firstRowFull || totalSize.value > showLength.value - 1) && !!index && totalSpan.value >= 24)
        if (!hidden) {
          if (24 - (currentSpan.value % 24) < colSpan) {
            totalSpan.value += 24 - (currentSpan.value % 24)
            currentSpan.value += 24 - (currentSpan.value % 24)
          }

          currentSpan.value += colSpan
        }

        return {
          ...item,
          hidden,
          rules: props.ignoreRules ? undefined : item.rules,
          colProps: {
            span: colSpan,
          },
        }
      })
    })

    const needCollapse = computed(() => {
      if (totalSpan.value < 24 || totalSize.value < showLength.value) {
        return false
      }
      return true
    })

    const offset = computed(() => {
      const offsetSpan = (currentSpan.value % 24) + spanSize.value.span
      return 24 - offsetSpan
    })

    const onResize = (e: CustomEvent) => {
      if (width.value !== e.detail.width && e.detail.width > 17) {
        setWidth(e.detail.width)
      }
      if (height.value !== e.detail.height) {
        setHeight(e.detail.height)
        emit('resizeheight', e.detail.height)
      }
    }

    const onCollapsed = () => {
      setCollapsed(!collapsed.value)
    }

    const onFinish = async () => {
      try {
        const values = await formRef.value?.validate()
        emit('finish', values)
      } catch (error) {
        console.warn(error)
      }
    }

    const onReset = () => {
      formRef.value?.resetFields()
      emit('reset')
    }

    return {
      offset,
      collapsed,
      spanSize,
      hiddenNum,
      needCollapse,
      processedList,
      formRef,
      onResize,
      onFinish,
      onReset,
      onCollapsed,
    }
  },
})
</script>

<template>
  <BaseForm
    ref="formRef"
    v-resize="true"
    class="mc-query-filter"
    :form-items="processedList"
    :layout="spanSize.layout"
    :col-props="{ span: spanSize.span }"
    :initial-values="initialValues"
    @resize="onResize"
  >
    <template #actions>
      <ElCol :span="spanSize.span" :offset="offset">
        <ElFormItem label="actions" class="mc-query-filter-form-item" label-width="0">
          <ElSpace>
            <ElButton @click="onReset">{{ resetText }}</ElButton>
            <ElButton type="primary" @click="onFinish">{{ searchText }}</ElButton>
            <ElLink v-if="needCollapse" type="primary" :underline="false" @click="onCollapsed">
              {{ collapsed ? '展开' : '收起' }}
              <template v-if="hiddenNum && collapsed"> ({{ hiddenNum }}) </template>
              <SvgIcon name="right" :style="{ marginLeft: '0.5em', transition: '0.3s all', transform: `rotate(${collapsed ? 0.25 : 0.75}turn)` }"
            /></ElLink>
          </ElSpace>
        </ElFormItem>
      </ElCol>
    </template>
  </BaseForm>
</template>
