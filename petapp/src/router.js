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

// 引入面板组件
import Nav from './views/Nav.vue' 
// 引入宠圈
import Petcircle from './views/Petcircle.vue'


// 引入轮播图组件
import Swipe from './components/Swipe.vue'
// 引入寄养家庭组件
import Foster from './components/Foster.vue'

//注册测试
import Test from './views/regtest'

// 引入发现页面
import Find from './views/Find.vue'


// 导航栏组件
import Navbar from './components/Navbar.vue'

// 详情页组件
import Details from './views/Details.vue'
// 引入消息组件
import Message from './views/Message.vue'


Vue.use(Router)


export default new Router({
  routes: [
    {path:"/Message",component:Message},
    {path:"/Details",component:Details},
    {path:"/Navbar",component:Navbar},
    {path:'/Foster',component:Foster},
    {path:'/Find',component:Find},
    {path:'/regtest',component:Test},
    {path:'/Petcircle',component:Petcircle},
    {path:'/Nav',component:Nav},
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
