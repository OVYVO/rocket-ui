# 二维码

> 可以将任意链接 URL 地址或者是一段描述性文字生成二维码，您可以定制二维码的宽高及颜色

#### 基本使用

::: demo

```vue
<template>
  <div class="code-wrap">
    <ro-qrcode url="https://www.baidu.com"></ro-qrcode>
    <ro-qrcode url="您好，RocketsUI！"></ro-qrcode>
  </div>
</template>
```

:::

#### 定制宽高

::: demo

```vue
<template>
  <div class="code-wrap">
    <ro-qrcode url="200px*200px" width="150" height="150"></ro-qrcode>
    <ro-qrcode url="150px*150px" width="125" height="125"></ro-qrcode>
    <ro-qrcode url="100px*100px" :width="100" :height="100"></ro-qrcode>
  </div>
</template>
```

:::

#### 定制颜色

::: demo

```vue
<template>
  <div class="code-wrap">
    <ro-qrcode url="您好，RocketsUI！" darkColor="#67C23A" lightColor="#ffffff"></ro-qrcode>
    <ro-qrcode url="您好，RocketsUI！" darkColor="#E6A23C" lightColor="#ffffff"></ro-qrcode>
    <ro-qrcode url="您好，RocketsUI！" darkColor="#F56C6C" lightColor="#ffffff"></ro-qrcode>
  </div>
</template>
```

:::

### 参数说明

| 参数       | 说明       | 类型            | 可选值 | 默认值    |
| ---------- | ---------- | --------------- | ------ | --------- |
| url        | URL 地址   | string          | 必填   | -         |
| width      | 二维码宽度 | [string,number] | -      | -         |
| height     | 二维码高度 | [string,number] | -      | -         |
| darkColor  | 二维码颜色 | string          | -      | '#000000' |
| lightColor | 背景颜色   | string          | -      | '#ffffff' |
