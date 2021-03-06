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
//引入地图组件
import Map from './views/Map.vue'
//引入宠物品种组件
import Kind from './views/Kind.vue'
// 引入动态详情组件
import Detailstory from './views/Detailstory.vue'
// 引入面板组件
import Nav from './views/Nav.vue' 
// 引入宠圈
import Petcircle from './views/Petcircle.vue'
// 引入寄养家庭组件
import Foster from './components/Foster.vue'
// 引入注册页
import Reg from './views/Reg.vue'
// 引入发现页面
import Find from './views/Find.vue'
//引入购物车组件
import Cart from './views/Cart.vue'
// 详情页组件
import Details from './views/Details.vue'
// 引入消息组件
import Message from './views/Message.vue'
// 公告详情页
import Announcement from './views/Announcement.vue'
// 客服消息页
import Service from './views/Service.vue'
// 我的页面
import Mine from './views/Mine.vue'
//寄养家庭详情页
import Fosterdetails from './views/Fosterdetails.vue'
// 评论组件
import Comment from './components/Comment.vue'
// 个人动态组件
import Mystory from './views/Mystory.vue'
// 首页故事详情组件
import DetailIndex from './views/DetailIndex.vue'

// import Apply from './views/Apply.vue'


Vue.use(Router)


export default new Router({
  routes: [
    // {path:"/Apply",component:Apply},
    {path:"/DetailIndex/:iid",component:DetailIndex,props:true},
    {path:"/Cart",component:Cart},
    {path:"/Mystory",component:Mystory},
    {path:"/Fosterdetails/:fid",component:Fosterdetails,props:true},
    {path:"/Comment",component:Comment},
    {path:"/Map",component:Map},
    {path:"/Mine",component:Mine},
    {path:"/Service",component:Service},
    {path:"/Announcement",component:Announcement},
    {path:"/Message",component:Message},
    {path:"/Details/:faddress",component:Details,props:true,meta:{keepAlive:true}},
    {path:"/Details",component:Details},
    {path:'/Foster',component:Foster},
    {path:'/Find',component:Find},
    {path:'/Reg',component:Reg},
    {path:'/Petcircle',component:Petcircle},
    {path:'/Nav',component:Nav},
    {path:'/Kind',component:Kind},
    {path:'/Detailstory/:id',component:Detailstory,props:true},
    {path:'/Newstory',component:Newstory},
    {path:'/Petmessage',component:Petmessage,meta:{keepAlive:true}},
    {path:'/Petlist',component:Petlist},
    {path:'/Addstory',component:Addstory},
    {path:'/Login',component:Login}
  ]
})
