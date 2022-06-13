/*
 * @Author: shen
 * @Date: 2022-06-09 10:13:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 23:11:06
 * @Description:
 */
import type { Component } from 'vue'
import type { FieldType } from './interface'
import FieldInput from './fields/FieldInput.vue'
import FieldInputNumber from './fields/FieldInputNumber.vue'
import FieldSelect from './fields/FieldSelect.vue'
import FieldDatePicker from './fields/FieldDatePicker.vue'
import FieldRadioGroup from './fields/FieldRadioGroup.vue'
import FieldCheckbox from './fields/FieldCheckbox.vue'
import FieldCheckboxGroup from './fields/FieldCheckboxGroup.vue'
import FieldSwitch from './fields/FieldSwitch.vue'
import FieldSlider from './fields/FieldSlider.vue'

export const fieldComponentMap: Partial<Record<FieldType, Component>> = {
  input: FieldInput,
  'input-number': FieldInputNumber,
  'date-picker': FieldDatePicker,
  select: FieldSelect,
  'radio-group': FieldRadioGroup,
  'checkbox-group': FieldCheckboxGroup,
  checkbox: FieldCheckbox,
  switch: FieldSwitch,
  slider: FieldSlider,
  // textarea: FieldText,
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
  'input-number': ['min', 'max', 'step', 'step-strictly', 'stepStrictly', 'controls', 'value-on-clear', 'onFocus', 'onBlur'],
  'date-picker': [
    'editable',
    'start-placeholder',
    'startPlaceholder',
    'end-placeholder',
    'endPlaceholder',
    'type',
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
  'radio-group': [],
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
  // textarea: [],
}
