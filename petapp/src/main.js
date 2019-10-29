import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入amap组件
import AMap from 'vue-amap';
//注册 amap
Vue.use(AMap);

 
// 引入mint-ui组件库中的所有组件
import MintUI from 'mint-ui'
// 引入mint-ui库中样式文件
import 'mint-ui/lib/style.css'

// 注册mint-ui
Vue.use(MintUI)
// 引入vant组件库
import Vant from 'vant'
// 引入vant库中的样式文件
import 'vant/lib/index.css'

// 注册vant
Vue.use(Vant);
// 引入axios模块
import axios from "axios"

 // 初始化vue-amap
 AMap.initAMapApiLoader({
  // 高德key
  key: '588cb887d0e2cc60efb70aa946e48f2c',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

// 配置服务器的基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/"

// // 配置保存session信息
axios.defaults.withCredentials=true
// 注册axios模块
Vue.prototype.axios=axios

<<<<<<< HEAD
 Vue.config.productionTip = false
=======
Vue.config.productionTip = false
// 创建中转站实现kind与petmessage之间的传值
let petkind= new Vue()
Vue.prototype.petkind=petkind;
>>>>>>> 32b57aa049fc511de078da90ac1838763c64030c

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
