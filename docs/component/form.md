---
title: Form 表单
---

# Form 表单

基于Element Plus二次封装的使用JSON Schema配置方式动态生成表单的组件。

当前版本的组件只支持栅格化布局，默认根form容器宽度响应式计算列数。

## 基本用法

最基础的表单包括各种输入表单项，比如input、select、radio、checkbox等。

:::demo 通过设置 `form-items` 属性配置表单项即可生成表单，通过ref获取表单数据域。

form/basic

:::

## 表单默认值

表单默认值，只有初始化以及重置时生效，如果需要修改，可以通过表单方法修改。

:::demo 通过设置 `initial-values` 属性配置表单表单默认值，也可以通过配置表单项的`initialValue`属性设置单项的默认值，表单的`initial-values`优先级高。

form/initial

:::

## 表单方法调用

我们推荐通过 `useForm` 对表单数据域进行交互。

:::demo 注意 `useForm` 是 `Vue3 Hooks` 的实现，只能用于`setup`函数内，`options` 组件请通过ref获取表单数据域。

form/use-form

:::

## 栅格化布局

表单默认根据表单容器大小设置响应式断点而非视口大小。详见下方**默认布局时的规则**

:::demo 通过设置`span`属性可以改变表单的栅格化布局。例如：span=8, 表单列数为`24/8=3`，可以通过设置表单项的`colSize`设置某一个表单项所占的列数。

form/grid

:::

## 表单项布局

根据你们的设计情况，来选择最佳的标签表单项布局方式。

:::demo 通过设置`layout`属性可以改变表单项标签的位置，可选值为 `horizontal` 、 `vertical`， 当设为 `vertical` 时标签会置于表单项的顶部。

form/layout

:::

## 表单禁用

设置表单组件禁用，仅对内置组件有效，自定义`renderField`等需要自行实现。

:::demo 通过设置 `disabled` 属性为 `true` 可以让表单变成禁用状态。

form/disabled

:::

## 表单项分组

当前版本的分组只是分割表单项即`Tabs`切换滚动的功能，后期会加入展示数据域及折叠的功能。

:::demo 通过设置 `form-items` 表单项配置的`type='group'`即可，需要配置唯一的`key`值。

form/group

:::

## 滚动导航

对于表单项的较多的表单，可以使用滚动切换的方式快速切换表单位置，需要配合上一节的`表单项分组`一起使用。

:::demo 通过设置 `layout-type` 属性为`TabsForm`即可开启tab滚动切换功能，通过设置 `tabPosition` 可以改变tab的位置，可选值为 `left` 、 `right`、 `top`。**注意：** 表单需要有高度。

form/tabs

:::

## API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间隔	 | `number` | - |
| initialValues | 表单默认值，只有初始化以及重置时生效 | `object` | - |
| formItems | 表单项配置列表（必要参数） | `FormItemType[]` | `[]` |
| layout | 表单布局 |`horizontal` \| `vertical` | `horizontal` |
| layoutType | 使用的表单布局模式 | `TabsForm` | - |
| labelWidth | label 宽度 | `number` \| `'auto'` | - |

### 默认布局时的规则：

| 容器宽度断点          | 单行展示表单列数（包含操作区域） | 默认布局     |
| --------------------- | -------------------------------- | ------------ |
| `≧ 1352px`            | 4 列                             | `horizontal` |
| `≧ 1062px`            | 3 列                             | `horizontal` |
| `≧ 701px && < 1063px` | 3 列                             | `horizontal` |
| `≧ 513px && < 701px`  | 2 列                             | `vertical`   |
| `< 513px`             | 1 列                             | `vertical`   |

### 强制上下布局时的规则

| 容器宽度断点          | 单行展示表单列数（包含操作区域） |
| --------------------- | -------------------------------- |
| `≧ 1057px`            | 4 列                             |
| `≧ 785px && < 1057px` | 3 列                             |
| `≧ 513px && < 785px`  | 2 列                             |
| `< 513px`             | 1 列                             |