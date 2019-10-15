import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 引入登录组件
import Login from './views/Login.vue'
// 引入发布动态组件
import Addstory from './views/Addstory.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
