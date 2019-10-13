import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios模块
import axios from "axios"

// 注册axios模块
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
