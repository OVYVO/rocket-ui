# 消息弹窗
> 可以像调用方法一样唤起一个消息弹窗

#### 基础用法
::: demo
```vue
<template>
  <div 
    @click="confirm" 
    style="color: #409eff;cursor: pointer;"
  >
    点击打开MessageBox
  </div>
</template>

<script>
export default {
  methods:{
    confirm(){
      this.$confirm({
        title: "测试一下",
        message: "哈哈哈"
      }).then(res=>{
        console.log(123)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

``` 
:::