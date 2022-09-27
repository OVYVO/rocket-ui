import Vue from 'vue'
import MessageBox from './main.vue'

const MessageModalConstructor = Vue.extend(MessageBox)

let currentMessage
let instance;
let msgQueue = [];

const initInstance = ()=>{
  instance = new MessageModalConstructor({
    el: document.createElement('div')
  })
}

const defaultCallback = (action,res)=>{
  if (currentMessage) {
    if (action === 'confirm') {
      if(currentMessage.options.type == 'edit' ){
        const { inputValue='' } = res
        currentMessage.resolve({action,inputValue})
      }else{
        currentMessage.resolve(action)
      }
    }else if(action === 'cancel' || action === 'close'){
      currentMessage.reject(action)
    }
  }
}

const modalControl = ()=>{
  if(!instance){
    initInstance()
  }
  if(!instance.visible){
    if(msgQueue.length){
      currentMessage = msgQueue.shift()
      let {options} = currentMessage
      Object.keys(options).forEach(prop=>{
        // eslint-disable-next-line no-prototype-builtins
        if(options.hasOwnProperty(prop)){
          instance[prop] = options[prop]
        }
      })
      instance.callback = defaultCallback
      // 挂载实例
      document.body.appendChild(instance.$el)
      Vue.nextTick(()=>{
        instance.visible = true
      })
    }
  }
}

const MessageModal = function(options){
  return new Promise((resolve,reject)=>{
    msgQueue.push({
      options,
      resolve,
      reject
    })
    modalControl()
  })
}


export {MessageModal}
export default MessageModal