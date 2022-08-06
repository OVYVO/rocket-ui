<template>
  <div class="statistics-container">
    <div class="section">
      <div class="label">{{label}}:</div>
      <div class="progress" 
        :style="`
          --success-num: ${percent};
          --addition-info:'${additionInfo}';
          width:${strokeWidth};
          height:${strokeHeight}
        `"
      ></div>
      <div class="info">{{success}}/{{total}}</div>
    </div>
  </div>
</template>

<script>
import './main.css';
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
    strokeWidth:{
      type: String,
      default: '200px'
    },
    strokeHeight:{
      type: String,
      default: '20px'
    },
    additionInfo:{
      type: String,
      default: ''
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
