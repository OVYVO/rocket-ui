# 消息弹窗

> 可以像调用方法一样唤起一个简单的消息弹窗

#### 基础用法

::: demo

```vue
<template>
  <div @click="confirm" style="color: #409eff;cursor: pointer;">点击打开MessageBox</div>
</template>

<script>
export default {
  methods: {
    confirm() {
      this.$confirm({
        title: '警告信息',
        message: '确定要执行该操作吗？'
      })
      .then(res => {
        console.log(123)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
```

:::

#### 全局使用

如果你完整引入了 RocketsUI，它会为 Vue.prototype 添加如下全局方法：$confirm。因此在 Vue instance 中可以采用本页面中的方式调用 MessageBox。

#### 单独引入

如果想单独引入MessageBox:

```javascript
  import { MessageBox } from 'rockets-ui';
```
使用方式及参数参考样例。

### 参数说明

| 参数         | 说明             | 类型    | 可选值 | 默认值     |
| ------------ | ---------------- | ------- | ------ | ---------- |
| title        | 标题名称          | string  | 必填   | - |
| message      | 提示内容          | string  | 必填   | - |