---
title: Loading 加载
---

# Loading 加载

## 基本用法

一个简单的 loading 状态。

:::demo 配置`spinning`属性为`true`控制卡片加载中。

loading/basic

:::

## 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

:::demo 通过 `size`属性设置loading大小。 该属性的值可以是：`small`或`large`。

loading/size

:::

## 自定义描述文案

自定义加载动画描述文案。

:::demo 通过 `tip`属性设置自定义描述文案。

loading/text

:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | `number (毫秒)` | - | - |
| size | 组件大小  | `string` | small/default/large | default |
| spinning | 是否为加载中状态 | `boolean` | - | false |
| tip | 当作为包裹元素时，可以自定义描述文案 | `string` | - | - |

## 插槽

| 插槽名	   | 说明          |
| ------ | ------------- |
| -      | 做为包裹容器时的内容     |