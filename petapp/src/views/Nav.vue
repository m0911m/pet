<template>
<div>
  <navbar></navbar>
  <!-- 顶部导航，进入寄养家庭 -->
    <ul class="jumpstyle">
      <li class="listyle">Hi 想让他住哪里</li>
      <li><input class="inputstyle" disabled placeholder="找附近的寄样家庭" type="text"></li>
    </ul>
  <!-- 宠物服务 -->
  <div>
    <ul class="actstyle">
      <li class="cwstyle">
        申请家庭
        <img src="../../public/imgs/heart_red.png" alt="">   
      </li>|
      <li class="cwstyle">
        宠物指南
        <img src="../../public/imgs/heart_red.png" alt="">   
      </li>|
      <li class="cwstyle">
        保障服务
        <img src="../../public/imgs/heart_red.png" alt="">   
      </li>
    </ul>
  </div>
  <!-- 轮播 -->
  <div class="swipestyle">
    <swipe></swipe>
  </div>
  <div>

  </div>
  <!-- 发布寄养+合作医院 -->
  <div class="textstyle">
    <span>你可能想要</span>
    <ul class="middlestyle">
      <li class="listyle">
        <img src="../../public/imgs/park.png" alt="">
        <span>发布寄养</span>
      </li> 
      <li class="listyle">
        <img src="../../public/imgs/park.png" alt="">
        <span>积分商城</span>
      </li>      
      <li class="listyle">
        <img src="../../public/imgs/park.png" alt="">
        <span>合作医院</span>
      </li>
    </ul>
  </div>
    <!-- 为你推荐 -->
    <div class="recstyle">
      <span>为你推荐</span>
    </div>
    <users :userlist="userlist"></users>

</div>
</template>
<script>
// 引入轮播组件
import Swipe from "../components/Swipe"
// // 引入用户发布故事组件
import Users from "../components/Users"
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
    user(){
      // 请求首页故事
      var url="user/indexstory"
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
  position:fixed;
  top:0;
  z-index: 5;
  display:flex;
  width:100%;
  justify-content: center;
  align-items: center;
  padding:1rem 0 1rem 1rem;
  background:#FBC02D;
  display:flex;
  align-items: center;
  box-sizing:border-box;
}
/* 宠物服务 */
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
.actstyle{
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding:1rem;
}
.cwstyle{
  display:flex;
  align-content: center;
}
/* 发布寄样+合作医院 */
.middlestyle{
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-top:1rem;
}
.listyle{
  display:flex;
  flex-direction: column;
  font:bolder 1rem 楷体;
}
/* 轮播 */
.swipestyle{
  height:200px;
  display:flex;
  flex-direction: column;
  text-align: center;
}
.textstyle{
  display:flex;
  flex-direction: column;
  text-align: center;
  font:bolder 1.25rem 楷体;
}
/* 为你推荐 */
.recstyle{
  margin-top:1rem; 
  text-align: center;
  font:bolder 1.25rem 楷体;
}
</style>