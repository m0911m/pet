<template>
  <div class="login">
    <!-- 背景的图片 -->
    <img class="imgstyle" :src="require('../../public/imgs/login_bg.jpg')" alt="">
    <!-- logo图片 -->
    <van-image class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
   <!-- 输入框 -->
   <van-cell-group class="inputstyle">
    <van-field class="unamestyle" v-model="uname" label="用户名:" clearable placeholder="请输入用户名/手机号"></van-field>
    <van-field class="upwdstyle" v-model="upwd" label="密码:" clearable type="password" placeholder="请输入密码"></van-field>
     <!-- 登录按钮 -->
     <van-button class="loginstyle" @click="login">登录</van-button>
      <van-popup v-model="show" position="top">{{msg}}</van-popup>
    </van-cell-group>
    <div class="textstyle">您还没有账号?
      <router-link class="jumpstyle" :to="{path:'/Register'}">注册</router-link>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data(){
    return{
      // 保存用户输入的手机号和密码
      uname:"",  
      upwd:"" ,
      // 保存弹出层的属性
      show:false,
      msg:""
    }
  },
  methods:{
    login(){
      // 获取用户输入的手机号和密码
      var n=this.uname;
      var u=this.upwd;
      // 创建手机号正则和密码(6-16位字母数字)正则
      var nreg=/^1[3-9]\d{9}$/ //手机
      var mreg=/^\d{3,10}$/   //用户名
      var ureg=/^\d{6,16}$/   //密码
      // 验证用户名 
      if(nreg.test(n)==false){
        //验证不成功 弹出层弹出提示信息
        this.msg="手机格式有误,请重新输入";
        this.show=true;
        return;
      }
      if(ureg.test(u)==false){
        // 验证密码不成功,弹出提示信息
        this.msg="密码格式有误,请重新输入";
        this.show=true;
        return;
      }
      // 发送axios请求
       var url="user/login"
       var obj={uname:n,upwd:u}
      this.axios.post(url,qs.stringify(obj))
      .then(response=>{
      console.log(response);
      if(response.data.code>0){
        this.$router.push({path:'/Nav'});
      }else{
        this.msg="用户名或密码错误"
        this.show=true;
        return;
      }
      })
      .catch(function (error) {
      console.log(error);
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
}
/* logo */
.logostyle{
  position:absolute;
  top:0;
  left:0;
  width:3.75rem;
  top:20%;
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
  background-color: rgba(0,0,0,0.1);
}

.upwdstyle{
  position: absolute;
  top:4rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.1);
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
  color:#ff0;
  background:rgba(0,0,0,0.2) 
}
 /* 下部的链接 */
.textstyle{
  position:absolute;
  bottom:10%;
  left:30%;
  color:#FF0;
  font-weight:bold;
  background-color:rgba(0,0,0,0.5)
}
.jumpstyle{
  color:#0FF;
}

</style>