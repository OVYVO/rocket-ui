<template>
  <div class="statistics-container">
    <div class="section">
      <div class="label">{{label}}:</div>
      <div class="progress" 
        :style="`
          --success-num: ${percent};
          --success-color: ${color};
          --addition-info:'${additionInfo}';
          width:${strokeWidth};
          height:${strokeHeight};
          backgroundColor:${strokeColor}
        `"
      ></div>
      <div class="info" v-if="showInfo">{{success}}/{{total}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueStatistics',
  props:{
    label:{
      required: true,
      type: String,
      default: "请输入标题"
    },
    total:{
      required: true,
      type: Number,
      default: 0
    },
    success:{
      required: true,
      type: Number,
      default: 0,
    },
    color:{
      type: String,
      default: '#FF9E0D'
    },
    strokeWidth:{
      type: String,
      default: '200px'
    },
    strokeHeight:{
      type: String,
      default: '20px'
    },
    strokeColor:{
      type: String,
      default: '#D2D2D2'
    },
    additionInfo:{
      type: String,
      default: ''
    },
    showInfo:{
      type: Boolean,
      default: false
    }
  },
  computed:{
    percent(){
      // 解决数据异常,样式怪异兼容
      if(this.success  > this.total){
        return '100%'
      }else{
        return `${Math.floor((this.success*100)/this.total)}%`
      }
    }
  }
}
</script>
<style lang="less" scoped>
.statistics-container{
  display: flex;
}
.section{
  display: flex;
  align-items: center;
}
.label{
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  line-height: 12px;
}
.progress{
  margin: 0 10px;
  background: #D2D2D2;
  border-radius: 4px;
  position: relative;
  
}
.progress::before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: var(--success-num);
  background: var(--success-color);
  border-radius: 4px;
  transition: width 0.5s linear;
}
.progress::after{
  content: var(--addition-info);
  display: block;
  position: absolute;
  right: 0;
  bottom: -20px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
}
.info{
  font-size: 12px;
  color: #333333;
  line-height: 24px;
}
</style>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
