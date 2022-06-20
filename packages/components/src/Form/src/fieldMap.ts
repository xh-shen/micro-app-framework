/*
 * @Author: shen
 * @Date: 2022-06-09 10:13:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 21:39:35
 * @Description:
 */
import type { Component } from 'vue'
import type { FieldType } from './interface'
import FieldInput from './fields/FieldInput.vue'
import FieldInputNumber from './fields/FieldInputNumber.vue'
import FieldSelect from './fields/FieldSelect.vue'
import FieldDatePicker from './fields/FieldDatePicker.vue'
import FieldTimePicker from './fields/FieldTimePicker.vue'
import FieldRadioGroup from './fields/FieldRadioGroup.vue'
import FieldCheckbox from './fields/FieldCheckbox.vue'
import FieldCheckboxGroup from './fields/FieldCheckboxGroup.vue'
import FieldSwitch from './fields/FieldSwitch.vue'
import FieldSlider from './fields/FieldSlider.vue'
import FieldTextarea from './fields/FieldTextarea.vue'
import FieldCascader from './fields/FieldCascader.vue'
import FieldUploader from './fields/FieldUploader.vue'

export const fieldComponentMap: Partial<Record<FieldType, Component>> = {
  input: FieldInput,
  'input-number': FieldInputNumber,
  'date-picker': FieldDatePicker,
  'time-picker': FieldTimePicker,
  select: FieldSelect,
  cascader: FieldCascader,
  'radio-group': FieldRadioGroup,
  'checkbox-group': FieldCheckboxGroup,
  checkbox: FieldCheckbox,
  switch: FieldSwitch,
  slider: FieldSlider,
  textarea: FieldTextarea,
  uploader: FieldUploader,
}

export const fieldPropsMap: Partial<Record<FieldType, string[]>> = {
  input: [
    'type',
    'maxlength',
    'minlength',
    'show-word-limit',
    'showWordLimit',
    'formatter',
    'parser',
    'show-password',
    'showPassword',
    'renderPrefix',
    'renderSuffix',
    'renderPrepend',
    'renderAppend',
    'onFocus',
    'onBlur',
    'onInput',
    'onClear',
  ],
  textarea: ['maxlength', 'minlength', 'rows', 'autosize', 'show-word-limit', 'showWordLimit', 'onFocus', 'onBlur', 'onInput', 'onClear'],
  'input-number': ['min', 'max', 'step', 'step-strictly', 'stepStrictly', 'controls', 'value-on-clear', 'onFocus', 'onBlur'],
  'date-picker': [
    'editable',
    'start-placeholder',
    'startPlaceholder',
    'end-placeholder',
    'endPlaceholder',
    'type',
    'format',
    'range-separator',
    'rangeSeparator',
    'default-value',
    'defaultValue',
    'default-time',
    'defaultTime',
    'value-format',
    'valueFormat',
    'unlink-panels',
    'unlinkPanels',
    'disabled-date',
    'disabledDate',
    'shortcuts',
    'renderDefault',
    'renderRangeSeparator',
    'onBlur',
    'onFocus',
    'onCalendarChange',
    'onPanelChange',
    'onVisibleChange',
  ],
  'time-picker': [
    'editable',
    'start-placeholder',
    'startPlaceholder',
    'end-placeholder',
    'endPlaceholder',
    'is-range',
    'isRange',
    'arrow-control',
    'arrowControl',
    'align',
    'range-separator',
    'rangeSeparator',
    'format',
    'value-format',
    'valueFormat',
    'default-value',
    'defaultValue',
    'disabled-hours',
    'disabledHours',
    'disabled-minutes',
    'disabledMinutes',
    'disabled-seconds',
    'disabledSeconds',
    'onBlur',
    'onFocus',
    'onVisibleChange',
  ],
  select: [
    'multiple',
    'collapse-tags',
    'collapseTags',
    'collapse-tags-tooltip',
    'collapseTagsTooltip',
    'multiple-limit',
    'multipleLimit',
    'effect',
    'filterable',
    'filter-method',
    'filterMethod',
    'remote',
    'remote-method',
    'remoteMethod',
    'loading',
    'loading-text',
    'loadingText',
    'reserve-keyword',
    'reserveKeyword',
    'default-first-option',
    'defaultFirstOption',
    'tag-type',
    'tagType',
    'renderOption',
    'onBlur',
    'onFocus',
    'onClear',
    'onRemoveTag',
    'onVisibleChange',
  ],
  cascader: [
    'props',
    'show-all-levels',
    'showAllLevels',
    'collapse-tags-tooltip',
    'collapseTagsTooltip',
    'separator',
    'filterable',
    'filter-method',
    'filterMethod',
    'debounce',
    'before-filter',
    'beforeFilter',
    'tagType',
    'onBlur',
    'onFocus',
    'onRemoveTag',
    'onVisibleChange',
    'onExpandChange',
  ],
  'radio-group': ['radioType', 'radio-type'],
  'checkbox-group': ['min', 'max'],
  checkbox: ['true-label', 'trueLabel', 'false-label', 'falseLabel'],
  switch: [
    'active-value',
    'activeValue',
    'inactive-value',
    'inactiveValue',
    'loading',
    'inline-prompt',
    'inlinePrompt',
    'active-text',
    'activeText',
    'inactive-text',
    'inactiveText',
    'before-change',
    'beforeChange',
  ],
  slider: ['min', 'max', 'step', 'show-stops', 'showStops', 'show-tooltip', 'showTooltip', 'format-tooltip', 'formatTooltip', 'range', 'marks'],
  uploader: [
    'action',
    'headers',
    'method',
    'multiple',
    'data',
    'name',
    'with-credentials',
    'withCredentials',
    'show-file-list',
    'showFileList',
    'drag',
    'on-preview',
    'onPreview',
    'on-remove',
    'on-success',
    'onSuccess',
    'on-error',
    'onError',
    'on-progress',
    'onProgress',
    'on-exceed',
    'onExceed',
    'before-upload',
    'beforeUpload',
    'before-remove',
    'beforeRemove',
    'list-type',
    'listType',
    'limit',
  ],
}

export const fieldDateFormatterMap: Record<string, string> = {
  year: 'YYYY',
  month: 'YYYY-MM',
  monthrange: 'YYYY-MM',
  date: 'YYYY-MM-DD',
  dates: 'YYYY-MM-DD',
  daterange: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  datetimerange: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss',
}

export const fieldDefaultValueMap: Partial<Record<FieldType, any>> = {
  input: '',
  'input-number': null,
  'date-picker': (fieldProps?: Record<string, any>) => {
    if (fieldProps?.type?.endsWith('range')) {
      return []
    }
    return ''
  },
  'time-picker': (fieldProps?: Record<string, any>) => {
    return fieldProps?.isRange ? [] : ''
  },
  select: (fieldProps?: Record<string, any>) => {
    return fieldProps?.multiple ? [] : ''
  },
  cascader: (fieldProps?: Record<string, any>) => {
    return fieldProps?.props?.multiple ? [] : ''
  },
  'radio-group': '',
  'checkbox-group': [],
  checkbox: '',
  switch: false,
  slider: (fieldProps?: Record<string, any>) => {
    return fieldProps?.range ? [] : null
  },
  textarea: '',
  uploader: '',
}
