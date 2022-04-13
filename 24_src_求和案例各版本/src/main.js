//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入vuex
import Vuex from 'vuex'
//引入store
import Store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)
Vue.use(Vuex)

//创建vm
new Vue({
  el:'#app',
  render: h => h(App),
  store,
  //入口
  // pages: {
  //   index: {
  //     //入口
  //     entry: 'src/main.js'
  //   }
  // }
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
