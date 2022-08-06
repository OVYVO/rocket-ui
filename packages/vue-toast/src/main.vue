<template>
  <div 
    class="message-wrapper fadeInDown" 
    v-if="value"
    :style="style"
  >
    <span>{{message}}</span> 
  </div>
</template>

<script>
import './main.css';
export default {
  name: 'VueToast',
  props:{
    value:{
      required: true,
      type: Boolean,
      default: true
    },
    type:{
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'error', 'warning','success'].indexOf(value) !== -1;
      }
    },
    duration:{
      type: Number,
      default:3000
    },
    message:{
      required: true,
      type: String,
      default: '请输入提示语句'
    }
  },
  data(){
    return{
      bgColor: {
        'primary': '#1890ff',
        'error': '#f5222d',
        'warning': '#faad14',
        'success': '#52c41a'
      }
    }
  },
  computed:{
    style() {
      return {
        backgroundColor: this.bgColor[this.type]
      };
    }
  },
  mounted(){
    const _this = this
    this.timer = setTimeout(()=>{
       _this.$emit('input',false)
       _this.$emit('callback')
    },this.duration)
  },
  destroyed(){
    clearTimeout(this.timer)
  }
}
</script>
