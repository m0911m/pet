<template>
  <div>
    <navbar></navbar>
    <van-tabs v-model="active">
      <van-tab title="公告" >
        <div class="box1">
          <table></table>
          <!-- 公告时间 -->
          <p class="atime">2019年10月13日 11:24</p>
          <!-- 公告 -->
          <div class="announcement">
            <!-- 标题 -->
            <span class="title">【重要】园长精编 [ 寄养须知 ]</span>
            <!-- 图片 -->
            <div class="aimg">
              <img src="../../public/imgs/13.jpg" alt="" class="subimg">
            </div>
            <!-- 副标题 -->
            <p class="subtitle">划重点！寄养前必须了解的【最重要的事】</p>
            <!-- 查看详情 -->
            <div class="detail" @click="detail">
              <p>查看详情</p>
              <van-icon name="arrow" />
            </div>
          </div>
        </div>   
      </van-tab>
      <van-tab title="消息">
        <div class="box1">
          <table></table>
          <!-- 消息列表 -->
          <div class="msg" @click="server">
            <!-- 左侧图片 -->
            <div class="simg">
              <img src="../../public/imgs/server.png" alt="" class="img">
            </div>
            <!-- 右侧文字 -->
            <div class="right">
              <span>客服消息</span>
              <span class="time">2019年10月15日 13:08</span>
              <p class="subtext">服务满意度调查</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// 引入底部导航栏
import Navbar from "../components/Navbar"
  export default{
    data(){
      return{
        active:0
      }
    },
    components:{
      "navbar":Navbar
    },
    methods: {
      server(){
        console.log("跳转到客服界面")
      },
      detail(){
        console.log("跳转到详情页")
      },
    },
  }
</script>
<style scoped>
/* 公告 */
  .announcement{
    width:90%;
    height:240px;
    border:1px solid #ccc;
    border-radius: 3px;
    margin:0 auto;
    background: #fff;
    padding-top:5px;
  }
  .atime{
    text-align: center;
  }
  .box1{
    width:100%;
    height:650px;
    background: #eee;
  }
  .aimg{
    width:93%;
    height:150px;
    overflow: hidden;
    margin:0 auto;
    margin-top:5px;
  }
  .subimg{
    width:100%;
    height: 100%;
  }
  .title{margin-left:10px;}
  .subtitle{
    margin-left:10px;
    margin-top:5px;
    margin:5px 0 5px 10px;
    color:#aaa;
    font-size:14px;
  }
  .detail{
    border-top:1px solid #ccc;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
  }
  .detail>p{
    margin:5px 0 3px 10px;
  }
  /* 消息 */
  .msg{
    display:flex;
    background: #fff;
    padding:10px;
  }
  .simg{
    width:50px;
    height:50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
  }
  .img{
    width:100%;
  }
  .time{
    margin-left:100px;
    font-size:12px;
  }
  .subtext{
    font-size:14px;
    color:#666;
  }
  
</style>