import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  //入口
  pages: {
    index: {
      //入口
      entry: 'src/main.js'
    }
  }
})
