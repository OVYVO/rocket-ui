# 条形统计
> 用于简单的进度展示

#### 基础用法
::: demo
```vue
<template>
 <vue-statistics
  label="普通进度条"
  :total="100"
  :success="45"
 ></vue-statistics>
</template>

``` 
:::

#### 带有附加信息
::: demo
```vue
<template>
 <vue-statistics
  label="附加信息进度条"
  :total="100"
  :success="30"
  :additionInfo="additionInfo"
  style="margin-bottom: 20px"
 ></vue-statistics>
 <vue-statistics
  label="数据查看进度条"
  :total="100"
  :success="45"
  :showInfo="true"
 ></vue-statistics>
</template>

<script>
export default {
  data(){
    return{
      additionInfo: '附加信息'
    }
  }
}
</script>

``` 
:::

#### 自定义样式
::: demo
```vue
<template>
 <vue-statistics
  label="自定义样式"
  :total="100"
  :success="30"
  color="#409EFF"
  strokeColor="#F2F6FC"
  style="margin-bottom: 10px"
 ></vue-statistics>
 <vue-statistics
  label="自定义样式"
  :total="100"
  :success="45"
  color="#F56C6C"
  strokeColor="#F2F6FC"
  style="margin-bottom: 10px"
 ></vue-statistics>
 <vue-statistics
  label="自定义样式"
  :total="100"
  :success="60"
  color="#5C887A"
  strokeColor="#F2F6FC"
 ></vue-statistics>
</template>

``` 
:::

### 参数说明
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label     | 标题           | string | 必填 | 请输入标题 |
| total | 最大值 | Number |必填| 0 |
| success | 进度值 | Number | 必填 | 0 |
| additionInfo | 附加信息 | String | — | — |
| showInfo | 是否展示进度信息 | Boolean | — | false |
| color | 进度条颜色 | String | — | '#FF9E0D' |
| strokeWidth | 进度条宽度 | String | — | '200px' |
| strokeHeight | 进度条宽度 | String | — | '40px' |
| strokeColor | 进度条背景色 | String | — | '#D2D2D2' |
