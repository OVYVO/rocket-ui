import Statistics from '@root/packages/statistics/src/main.vue'


export default({
  Vue
})=>{
  Vue.mixin({
    mounted() {
      Vue.component(Statistics.name, Statistics);
    }
})
}