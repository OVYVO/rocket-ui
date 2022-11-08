import Qrcode from './src/main.vue'

Qrcode.install = Vue => {
  Vue.component(Qrcode.name, Qrcode)
}

export default Qrcode
