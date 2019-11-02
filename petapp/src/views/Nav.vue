<template>
  <div>
  <!-- 进入寄养家庭 -->
    <ul class="jumpstyle">
      <li class="listyle">Hi 想让他住哪里</li>
      <li><input class="inputstyle" @click="search"  placeholder="找附近的寄养家庭" type="text"></li>
    </ul>   
    <van-popup v-model="show" position="top">
      <div class="popup">
        <div @click="update">取消</div>
        <div @click="confirm">确定</div>
      </div>
      <van-cell-group>
        <van-field v-model="faddress" placeholder="请输入搜索的内容" autofocus="autofocus"></van-field>
      </van-cell-group>
    </van-popup>
    <!-- 宠物服务 -->
    <!-- 申请家庭+保障服务+合作医院 -->
    <ul class="servestyle">
      <li  @click="foster">
        宠物家庭
        <img src="../../public/imgs/jiating.png" alt="">
      </li>
      <li>
        发布寄养
        <img src="../../public/imgs/baozhang.png" alt="">
      </li>
      <li>
        宠物医院
        <img src="../../public/imgs/yiyuan.png" alt="">
      </li>
    </ul>
    <!-- 轮播 -->
    <swipe></swipe>
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
// 引入用户发布故事组件
import Users from "../components/Users"
// 引入底部导航栏
import Navbar from "../components/Navbar"
// 引入qs模块
import qs from "qs"
export default {
  data(){
    return{
     userlist:[],
     show:false,
     faddress:"",
    }
  },
  components: {
    "swipe":Swipe,
    "users":Users,
    "navbar":Navbar
  },
  created(){
    this.user();
  },
  methods:{
    update(){
      this.show=false;
    },
    confirm(){
      this.show=false;
      var faddress=this.faddress;
        var obj={faddress};
        var url="foster/searchhome";
        this.axios.post(url,qs.stringify(obj)).then(res=>{
          this.$router.push({path:`/Details/${faddress}`})  
      })
    },
    search(){
      this.show=true;
    },
    apply(){
      this.$router.push({path:"/Apply"})
    },
    foster(){
      this.$router.push({path:"/Details"})
    },
    user(){
      // 请求首页故事
      var url="news/indexstory"
      this.axios.get(url).then(res=>{
        // console.log(res.data.data);
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
  justify-content:space-around;
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
/* 弹出层 */
.popup{
  display:flex;
  justify-content:space-between;
  padding:1rem;
}
/* 为你推荐 */
.recstyle{
  margin-top:1rem; 
  text-align: center;
  font:bolder 1.25rem 楷体;
}
</style>