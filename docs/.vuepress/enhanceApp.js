/* Automatically generated by './build/bin/build-docs.js' */

import '@src/fonts/iconfont.css'
import icon from '@src/fonts/iconfont.json'
import '../styles/index.less'

import MessageBox from '@root/packages/message-box/src/main.js'
import Statistics from '@root/packages/statistics/src/main.vue'
import Icon from '@root/packages/icon/src/main.vue'
import Qrcode from '@root/packages/qrcode/src/main.vue'
import Imageview from '@root/packages/imageview/src/main.vue'

const components = [Statistics, Icon, Qrcode, Imageview]

export default ({ Vue }) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
  Vue.prototype.$icon = icon.glyphs
  Vue.prototype.$confirm = MessageBox
}
