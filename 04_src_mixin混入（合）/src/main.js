import Vue from 'vue'
import App from './App.vue'
import {mixin,mixin2} from "./mixin"

Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
  el:'#App',
  render: h => h(App),
})
