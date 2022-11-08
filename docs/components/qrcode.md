# 二维码

> 可以将任意链接 URL 地址生成二维码

::: demo

```vue
<template>
  <ro-qrcode url="https://www.baidu.com"></ro-qrcode>
</template>

<script></script>
```

:::

### 参数说明

| 参数   | 说明       | 类型            | 可选值 | 默认值  |
| ------ | ---------- | --------------- | ------ | ------- |
| url    | URL 地址   | string          | 必填   | -       |
| width  | 二维码宽度 | [string,number] | -      | '200px' |
| height | 二维码高度 | [string,number] | -      | '200px' |
