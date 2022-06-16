<!--
 * @Author: shen
 * @Date: 2022-06-08 10:32:46
 * @LastEditors: shen
 * @LastEditTime: 2022-06-16 14:40:23
 * @Description: 
-->
<script lang="ts">
import type { ColProps, FormItemType, FormLabelPosition } from './interface'
import { defineComponent, computed, watch, toRaw, ref } from 'vue'
import { ElForm, FormInstance } from 'element-plus'
import { usePrevious } from '@micro/hooks'
import { formProps } from './interface'
import { useProvideForm } from './context/FormContext'
import useFormValues from './hooks/useFormValues'
import useFormItems from './hooks/useFormItems'
import FormWrapper from './components/FormWrapper.vue'
import FormItems from './components/FormItems.vue'
import FormActions from './components/FormActions.vue'

export default defineComponent({
  name: 'McForm',
  props: formProps,
  components: { ElForm, FormWrapper, FormItems, FormActions },
  emits: ['finish', 'reset'],
  setup(props, { expose, emit }) {
    const elFormRef = ref<FormInstance>()

    const EMPTY_LIST: FormItemType[] = []

    const rawItems = ref<FormItemType[]>([])
    const mode = computed(() => props.mode || 'edit')
    const grid = computed(() => props.grid)
    const gutter = computed(() => props.gutter)
    const labelWidth = computed(() => props.labelWidth)
    const labelPosition = computed<FormLabelPosition>(() => (props.layout === 'horizontal' ? 'right' : 'top'))
    const disabled = computed(() => props.disabled)
    const colProps = computed(() => props.colProps || ({ span: 8 } as ColProps))

    const preInitialValues = usePrevious(props.initialValues)

    watch(
      () => props.initialValues,
      () => {
        if (!props.initialValues || !preInitialValues) return
      },
      { immediate: true },
    )

    watch(
      () => props.formItems,
      () => {
        rawItems.value = toRaw(props.formItems) || EMPTY_LIST
      },
      { immediate: true },
    )

    const { items, genItems, fieldInitialValues } = useFormItems(rawItems)

    const { formValues, updateValue, setInitialValues, getFormValues, setFormValues, setFieldValue, getFieldValue, validate, resetFields, clearValidate } = useFormValues(elFormRef)

    const mountRef = ref<boolean | null>(null)
    setInitialValues({ ...fieldInitialValues.value, ...props.initialValues }, !mountRef.value)
    if (!mountRef.value) {
      mountRef.value = true
    }

    // watch(
    //   formValues,
    //   () => {
    //     console.log(formValues.value)
    //   },
    //   {
    //     deep: true,
    //   },
    // )

    const instanceMethods = { updateValue, getFormValues, setFormValues, setFieldValue, getFieldValue, validate, resetFields, clearValidate }

    const onFinish = () => {
      emit('finish')
    }

    const onReset = () => {
      emit('reset')
    }

    useProvideForm({
      mode,
      grid,
      gutter,
      labelWidth,
      disabled,
      colProps,
      genItems,
      formValues,
      updateValue,
    })

    expose({
      ...instanceMethods,
    })

    return {
      items,
      formValues,
      elFormRef,
      labelPosition,
      onFinish,
      onReset,
      ...instanceMethods,
    }
  },
})
</script>

<template>
  <ElForm ref="elFormRef" class="mc-form" :model="formValues" :label-position="labelPosition" :label-width="labelWidth" :disabled="disabled">
    <FormWrapper :gutter="gutter">
      <FormItems :list="items" />
      <slot name="actions">
        <FormActions v-if="showDefaultActions" @submit="onFinish" @reset="onReset" />
      </slot>
    </FormWrapper>
  </ElForm>
</template>
