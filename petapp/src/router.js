import Vue from 'vue'
import Router from 'vue-router'
// 引入登录组件
import Login from './views/Login.vue'
// 引入发布动态组件
import Addstory from './views/Addstory.vue'
//引入宠物信息列表组件
import Petlist from './views/Petlist.vue'
//引入宠物详细信息组件
import Petmessage from './views/Petmessage.vue'
// 引入动态组件
import Newstory from './views/Newstory.vue'
// 引入注册组件
import Register from './views/Register.vue'
//引入宠物品种组件
import Kind from './views/Kind.vue'
// 引入动态详情组件
import Detailstory from './views/Detailstory.vue'
// 引入导航组件
import Tabber from './views/Tabber.vue'
// 引入面板组件
import Nav from './views/Nav.vue' 
// 引入宠圈
import Petcircle from './views/Petcircle.vue'
// 输入框
import Inputmsg from './views/Inputmsg.vue'

// 引入轮播图组件
import Swipe from './components/Swipe.vue'
// 引入寄养家庭组件
import Foster from './components/Foster.vue'

//注册测试
import Test from './views/regtest'

// 引入发现页面
import Find from './views/Find.vue'

// 主页
import Index from './views/Index.vue'






Vue.use(Router)


export default new Router({
  routes: [
    {path:'/Index',component:Index},
    {path:'/Foster',component:Foster},
    {path:'/Find',component:Find},
    {path:'/regtest',component:Test},
    {path:'/Inputmsg',component:Inputmsg},
    {path:'/Petcircle',component:Petcircle},
    {path:'/Nav',component:Nav},
    {path:'/Tabber',component:Tabber},
    {path:'/Kind',component:Kind},
    {path:'/Detailstory',component:Detailstory},
    {path:'/Register',component:Register},
    {path:'/Newstory',component:Newstory},
    {path:'/Swipe',component:Swipe},
    {path:'/Petmessage',component:Petmessage},
    {path:'/Petlist',component:Petlist},
    {path:'/Addstory',component:Addstory},
    {path:'/Login',component:Login}
  ]
})
