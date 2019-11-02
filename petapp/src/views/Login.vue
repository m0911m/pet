<template>
  <div class="login">
    <!-- 背景的图片 -->
    <img class="imgstyle" :src="require('../../public/imgs/bg1.jpg')" alt="">
   <!-- 输入框 -->
   <van-cell-group class="inputstyle">
    <!-- logo图片 -->
    <van-image class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
    <van-field class="unamestyle" autofocus="autofocus" v-model="uphone" label="用户名:" clearable placeholder="请输入用户名/手机号"></van-field>
    <van-field class="upwdstyle" v-model="upwd" label="密码:" clearable type="password" placeholder="请输入密码"></van-field>
     <!-- 登录按钮 -->
     <van-button class="loginstyle" @click="login">登录</van-button>
      <van-popup  position="top">{{msg}}</van-popup>
    <div class="textstyle">您还没有账号?
      <router-link class="jumpstyle" :to="{path:'/Reg'}">注册</router-link>
    </div>
    </van-cell-group>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data(){
    return{
      // 保存用户输入的手机号和密码
      uphone:"",  
      upwd:"" ,
      // 保存弹出层的属性
      msg:""
    }
  },
  methods:{
    login(){
      // 获取用户输入的手机号和密码
      var n=this.uphone;
      var u=this.upwd;
      // 创建手机号正则和密码(6-16位字母数字)正则
      var nreg=/^1[3-9]\d{9}$/ //手机
      var ureg=/^\d{6,16}$/   //密码
      // 验证用户名 
      if(nreg.test(n)==false){
        //验证不成功 弹出层弹出提示信息
        this.$dialog.alert({
         message: "输入的手机号码格式不正确", //改变弹出框的内容
        })
        return;
      }
      if(ureg.test(u)==false){
        // 验证密码不成功,弹出提示信息
        this.$dialog.alert({
         message: "输入的密码格式不正确", //改变弹出框的内容
        })
        return;
      }
      // 发送axios请求
       var url="user/login"
       var obj={uphone:n,upwd:u}
       this.axios.post(url,qs.stringify(obj))
      .then(res=>{
      // console.log(res);
      if(res.data.code==200){
        this.$router.push({path:'/Nav'});
      }else{
        this.$dialog.alert({
         message: "有户名或密码错误", //改变弹出框的内容
        })
      }
      })
      .catch(function (error) {
      // console.log(error);
      });
    }
  }
}
</script>
<style scoped>
/* 最外层父级 */
.login{
  display:flex;
  position:fixed;
  width:100%;
  height:100%;
  text-align: center;
  box-sizing: border-box;
}
/* 背景 */
.imgstyle{
  position:relative;
  width:100%;
  height:100%;
  filter: blur(3px);
  opacity:0.8;
}
/* logo */
.logostyle{
  position:absolute;
  top:0;
  left:0;
  width:3.75rem;
  top:-6.25rem;
  left: 50%;
  margin-left:-1.33rem;
}

/* 输入框 */
.inputstyle{
  position: absolute;
  width:80%;
  top:35%;
  left:10%;
}

.unamestyle{
  position: absolute;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.8);
}

.upwdstyle{
  position: absolute;
  top:4rem;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.8);
}
/* 登录按钮 */

.loginstyle{
  position:absolute;
  top:8rem;
  left:0;
  width:100%;
  height:2rem;
  border-radius: 1rem;
  line-height: 2rem;
  color:#000;
  background:rgba(255,255,255,0.8); 
}
 /* 下部的链接 */
.textstyle{
  width:100%;
  position:absolute;
  top:14rem;
  color:#101010;
  font-weight:bold;
}
.jumpstyle{
  color:red;
}

</style>