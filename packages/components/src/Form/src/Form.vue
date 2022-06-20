<!--
 * @Author: shen
 * @Date: 2022-06-08 10:32:46
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 22:10:49
 * @Description: 
-->
<script lang="ts">
import type { ColProps, FormItemType, FormPosition } from './interface'
import { defineComponent, computed, watch, toRaw, ref } from 'vue'
import { ElForm, FormInstance, ElCol, ElFormItem } from 'element-plus'
import { usePrevious } from '@micro/hooks'
import { resize } from '@micro/directives'
import { classNames } from '@micro/utils'
import { formProps } from './interface'
import { useProvideForm } from './context/FormContext'
import useFormValues from './hooks/useFormValues'
import useFormItems from './hooks/useFormItems'
import useFormTabs from './hooks/useFormTabs'

import FormTabs from './components/FormTabs.vue'
import FormWrapper from './components/FormWrapper.vue'
import FormItems from './components/FormItems.vue'
import FormActions from './components/FormActions.vue'

export default defineComponent({
  name: 'McForm',
  props: formProps,
  components: { ElForm, FormWrapper, FormItems, FormActions, FormTabs, ElCol, ElFormItem },
  directives: { resize },
  emits: ['finish', 'reset'],
  setup(props, { expose, emit }) {
    const wrapRef = ref<any>()
    const elFormRef = ref<FormInstance>()
    const EMPTY_LIST: FormItemType[] = []
    const rawItems = ref<FormItemType[]>([])
    const mode = computed(() => props.mode || 'edit')
    const grid = computed(() => props.grid)
    const gutter = computed(() => props.gutter)
    const layout = computed(() => props.layout)
    const span = computed(() => props.span)
    const layoutType = computed(() => props.layoutType)
    const labelWidth = computed(() => props.labelWidth)
    const labelPosition = computed<FormPosition>(() => (props.layout === 'horizontal' ? 'right' : 'top'))
    const disabled = computed(() => props.disabled)
    const colProps = computed(() => props.colProps || ({ span: 8 } as ColProps))
    const preInitialValues = usePrevious(props.initialValues)
    const { formTabs, addTab, clearTab, tabKey, updateTabKey, updateTabKeyOnScroll } = useFormTabs()

    watch(
      () => props.initialValues,
      () => {
        if (!props.initialValues || !preInitialValues) return
      },
      { immediate: true },
    )

    watch(
      () => props.formItems,
      async () => {
        rawItems.value = toRaw(props.formItems) || EMPTY_LIST
        clearTab()
      },
      { immediate: true },
    )

    const { width, setWidth, items, genItems, fieldInitialValues } = useFormItems(rawItems, span, layout)

    const { formValues, updateValue, setInitialValues, getFormValues, setFormValues, setFieldValue, getFieldValue, validate, resetFields, clearValidate } = useFormValues(elFormRef)

    const mountRef = ref<boolean | null>(null)
    setInitialValues({ ...fieldInitialValues.value, ...props.initialValues }, !mountRef.value)
    if (!mountRef.value) {
      mountRef.value = true
    }

    const formCls = computed(() =>
      classNames({
        'mc-form': true,
        'mc-form--tabs': layoutType.value === 'TabsForm',
        'mc-form--query': layoutType.value === 'QueryFilter',
        'is-left': layoutType.value === 'TabsForm' && props.tabPosition === 'left',
        'is-right': layoutType.value === 'TabsForm' && props.tabPosition === 'right',
        'is-top': layoutType.value === 'TabsForm' && props.tabPosition === 'top',
      }),
    )

    const instanceMethods = { updateValue, getFormValues, setFormValues, setFieldValue, getFieldValue, validate, resetFields, clearValidate }

    const onFinish = () => {
      emit('finish')
    }

    const onReset = () => {
      emit('reset')
    }

    const onScroll = (top: number) => {
      updateTabKeyOnScroll(top)
    }

    const onResize = (e: CustomEvent) => {
      if (width.value !== e.detail.width && e.detail.width > 17) {
        setWidth(e.detail.width)
      }
    }

    useProvideForm({
      mode,
      grid,
      gutter,
      labelWidth,
      disabled,
      colProps,
      genItems,
      layoutType,
      formValues,
      updateValue,
      addTab,
    })

    expose({
      ...instanceMethods,
    })

    return {
      wrapRef,
      items,
      tabKey,
      formCls,
      formTabs,
      formValues,
      elFormRef,
      labelPosition,
      onFinish,
      onReset,
      onScroll,
      onResize,
      updateTabKey,
      ...instanceMethods,
    }
  },
})
</script>

<template>
  <ElForm v-resize="true" ref="elFormRef" :class="formCls" :model="formValues" :label-position="labelPosition" :label-width="labelWidth" :disabled="disabled" @resize="onResize">
    <FormTabs v-if="layoutType === 'TabsForm'" :list="formTabs" :position="tabPosition" :active-key="tabKey" />
    <FormWrapper ref="wrapRef" :gutter="gutter" @scroll="onScroll">
      <FormItems :list="items" />
      <ElCol :span="24">
        <ElFormItem label="">
          <slot name="actions">
            <FormActions v-if="showDefaultActions" @submit="onFinish" @reset="onReset" />
          </slot>
        </ElFormItem>
      </ElCol>
    </FormWrapper>
  </ElForm>
</template>
