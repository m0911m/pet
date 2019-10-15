import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 引入登录组件
import Login from './views/Login.vue'
// 引入发布动态组件
import Addstory from './views/Addstory.vue'
//引入宠物信息列表组件
import Petlist from './views/Petlist.vue'
//引入宠物详细信息组件
import Petmessage from './views/Petmessage.vue'
// 引入轮播图组件
import Swipe from './views/Swipe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Swipe',component:Swipe},
    {path:'/Petmessage',component:Petmessage},
    {path:'/Petlist',component:Petlist},
    {path:'/Addstory',component:Addstory},
    {path:'/login',component:Login},
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
