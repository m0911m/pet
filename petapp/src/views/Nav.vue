<template>
  <div>
    <div class="bagstyle">
      <img style="width:100%;height:230px;" src="../../public/imgs/dog04.jpg" alt="">
    </div>
  <!-- 进入寄养家庭 -->
    <ul class="jumpstyle" @click="foster">
      <li class="listyle">Hi 想让他住哪里</li>
      <li><input class="inputstyle" disabled placeholder="找附近的寄养家庭" type="text"></li>
    </ul>
    <!-- 宠物服务 -->
    <!-- 申请家庭+保障服务+合作医院 -->
    <ul class="servestyle">
      <li>
        申请家庭
        <img src="../../public/imgs/jiating.png" alt="">
      </li>
      <li>
        保障服务
        <img src="../../public/imgs/baozhang.png" alt="">
      </li>
      <li>
        宠物医院
        <img src="../../public/imgs/yiyuan.png" alt="">
      </li>
    </ul>
    <!-- 轮播 -->
    <swipe></swipe>
    <!-- 宠物服务 -->
    <!-- 申请家庭+保障服务+合作医院 -->

    <!-- 为你推荐 -->
    <div class="recstyle">
      <span>为你推荐</span>
    </div>
    <users :userlist="userlist"></users>
    <navbar></navbar>
  </div>
</template>
<script>
// 引入轮播组件
import Swipe from "../components/Swipe"
// // 引入用户发布故事组件
import Users from "../components/Users"
// 引入底部导航栏
import Navbar from "../components/Navbar"
export default {
  data(){
    return{
     userlist:[],
    }
  },
  components: {
    "swipe":Swipe,
    "users":Users,
    "navbar":Navbar
  },
  created(){
    this.user()
  },
  methods:{
    foster(){
      this.$router.push({path:"/Details"})
    },
    user(){
      // 请求首页故事
      var url="news/indexstory"
      this.axios.get(url).then(res=>{
        console.log(res.data.data);
        this.userlist=res.data.data;  
        
        // rows.title=res[0].ititle;
        // console.log(rows.title)     
      })
    }
  }  
}
</script>
<style scoped>


/* 顶部导航 */
.jumpstyle{
  display:flex;
  width:100%;
  justify-content: center;
  align-items: center;
  padding:1rem 0 1rem 1rem;
  background:#FBC02D;
  align-items: center;
  box-sizing:border-box;
}
.listyle{
  display:flex;
  flex-direction: column;
  font:bolder 1rem 楷体;
}
.inputstyle{
  display:flex;
  text-align:center;
  margin-left:1rem;
  height:1.5rem;
  width:8rem;
  border:0;
  border-radius: 16px;
  font:bold 0.875rem 楷体;
  padding:0.25rem;
}
/* 中部导航 */
.textstyle{
  display:flex;
  justify-content: center;
}
.servestyle{
  display:flex;
  justify-content: space-around;
  margin:0.5rem 0;
}






/* 为你推荐 */
.recstyle{
  margin-top:1rem; 
  text-align: center;
  font:bolder 1.25rem 楷体;
}
</style>