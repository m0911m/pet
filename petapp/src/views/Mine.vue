<template>
  <div>
    <navbar></navbar>
    <div class="top-user">
      <!-- <img src="../../public/imgs/14.jpg" alt="" class="bgpic">  -->
      <div class="leftbox" v-for="(item,i) of userList" :key="i">
        <!-- 用户名 -->
        <h3>{{item.uname}}</h3>
        <!-- 地址 -->
        <p>{{item.uadderss}}</p>
      </div>
      <div class="rightbox">
        <!-- 用户头像 -->
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="uesrimg"
        />
      </div>
    </div>
    <!-- 我的日常管理 -->
    <div class="daily">
      <h4 class="title">我的日常管理</h4>
      <van-grid :gutter="10" >
        <van-grid-item icon="award-o" text="我的宠物" to="/Petlist" />
        <van-grid-item icon="balance-list-o" text="我的订单" @click="cart"/>
        <van-grid-item icon="bulb-o" text="我的动态" to="/Mystory"/>
        <van-grid-item icon="shop-o" text="快速找家庭" />
      </van-grid>
    </div>
    
    <!-- 列表 -->
    <div class="listbox">
      <div class="list">
        <p>申请家庭</p>
        <van-icon name="arrow" />
      </div>
      <div class="list" @click="colloction">
        <p>我的收藏</p>
        <van-icon name="arrow" />
      </div>
      <div class="list" @click="server">
        <p>我的客服</p>
        <van-icon name="arrow" />
      </div>
      <div class="list" @click="showPopup">
        <p>分享给好友</p>
        <van-icon name="arrow" />
      </div>
      <div class="list" @click="close">
        <p>退出登录</p>
        <van-icon name="arrow" />
      </div>
      
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '28%' }"
    >
    <h4 class="sharetitle">选择要分享到的平台</h4>
    <div class="share">
        <div class="shareitem">
          <img src="../../public/imgs/QQ.png" alt="">
          <span>QQ</span>
        </div>
        <div class="shareitem">
          <img src="../../public/imgs/weixin.png" alt="">
          <span>微信</span>
        </div>
        <div class="shareitem">
          <img src="../../public/imgs/wechat.png" alt="">
          <span>微信朋友圈</span>
        </div>
        <div class="shareitem">
          <img src="../../public/imgs/sina.png" alt="">
          <span>新浪</span>
        </div>
    </div>
    <div class="cancle" @click="cancle">
      取消分享
    </div>
    
    </van-popup>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
  export default{
    data(){
      return{
        show: false,
        userList:[]
      }
    },
    methods:{
      cart(){
        this.$router.push("/Cart")
      },
      close(){
        this.$messagebox.confirm("是否退出登录").then(res=>{
          var url="user/close";
          this.axios.get(url).then(res=>{
            if(res.data.code==200){
              this.$router.push("/Login")
            }
          })
        })
        .catch(err=>{        
      })
      },
      server(){
        this.$router.push('/Service')
      },
      showPopup() {
        this.show = true;
      },
      cancle(){
        this.show = false;
      },
      loadMore(){
        var url="user/usermessage"
        this.axios.get(url).then(res=>{
            this.userList=res.data.data;
            if(res.data.code==402){
              this.$toast("请登录");
              this.$router.push("/Login")
            }
        })
      },
      colloction(){
        this.$toast("很抱歉，暂不提供该服务！")
      }
    },
    components:{
      "navbar":Navbar
    },
    created() {
      this.loadMore()
    },
  }
</script>
<style>
.cancle{
  width:100%;
  height:50px;
  text-align: center;
  line-height: 50px;
  color:#000;
  margin-top: 20px;
  overflow: hidden;
  background:#f7bf25;
}
  .shareitem{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .sharetitle{
    text-align: center;
  }
  .share{
    display: flex;
    justify-content: space-around;
  }
  .top-user{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7bf25;
  }
  .leftbox{
    width:60%;
    height:100px;
    padding-left:10px;
    box-sizing: border-box;
  }
  .rightbox{
    width:40%;
    height:100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .userimg{
    line-height: 1
  }
  .title{
    font-weight: bold;
    margin-left:10px;
  }
  .van-grid-item__content:first-child{
    background-color: #f2eada;
  }
  /* 招募令 */
  /* .ad{
    width:100%;
    height:100px;
    overflow: hidden;
  } */
  .listbox{
    padding:0 10px;
    box-sizing: border-box;
  }
  .list{
    display: flex;
    justify-content:space-between;
    align-items: center;
    border-bottom:1px solid #ccc;
  }
  
</style>
