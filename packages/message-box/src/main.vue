<template>
  <div class="message-box-container" v-if="visible">
    <div class="modal-content">
      <div class="modal-header">
        <div class="title">{{title}}</div>
        <!-- <i class="el-icon-close" @click="handleAction('close')"></i> -->
      </div>
      <div class="modal-body">
        <el-input v-if="showInput" v-model="inputValue" :placeholder="placeholder"></el-input>
        <template v-if="!showInput">
          <!-- <i class="el-icon-warning"></i><span>{{message}}</span> -->
        </template>
      </div>
      <div class="modal-footer">
        <el-button round @click="handleAction('cancel')">取消</el-button>
        <el-button round :type="type =='del' ? 'danger' : 'primary'" @click="handleAction('confirm')">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueMessageBox',
  props:{
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    placeholder:{
      type: String,
      default: '请输入'
    }
  },
  data(){
    return{
      visible: false,
      title: '标题名称',
      message: '这是一段内容',
      callback: null,
      action: '',
      type: 'del', //edit del
      inputValue: '',
    }
  },
  computed:{
    showInput(){
      return this.type == 'edit'
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.closeOnHashChange) {
        window.addEventListener('hashchange', this.close);
      }
    })
  },
  beforeDestroy() {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close);
    }
  },
  methods:{
    close(){
      if(!this.visible) return 
      this.visible = false
      if (this.action) {
        this.callback(this.action, this);
      }
    },
    handleAction(type){
      this.action = type
      this.close()
    }
  }
};
</script>
<style lang='less' scoped>
.message-box-container{
  
}
</style>
