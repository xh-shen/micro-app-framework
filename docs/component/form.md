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

## 表单方法调用

我们推荐通过 `useForm` 对表单数据域进行交互。

:::demo 注意 `useForm` 是 `Vue3 Hooks` 的实现，只能用于`setup`函数内，`options` 组件请通过ref获取表单数据域。

form/use-form

:::

## 表单项布局

:::demo 表单项有两种布局，配置`layout`即可。

form/layout

:::

