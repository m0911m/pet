<template>
  <div class="login">
    <!-- logo图片 -->
    <van-image class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
    <van-cell-group class="inputstyle">
    <van-field class="unamestyle" v-model="uname" label="用户名:" clearable placeholder="请输入用户名/手机号"></van-field>
    <van-field class="upwdstyle" v-model="upwd" label="密码:" clearable type="password" :attr="{autofocus:true}" placeholder="请输入密码"></van-field>
      <van-button class="loginstyle" @click="login">登录</van-button>
      <van-popup v-model="show" position="top">{{msg}}</van-popup>
    </van-cell-group>
    <div class="textstyle">
    <span>您还没有账号?
      <router-link class="jumpstyle" :to="{path:'/Register'}">注册</router-link>
      </span>
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
.login{
  width:100%;
  text-align: center;
  box-sizing: border-box;
  padding-top:4.875rem;
  padding-bottom:8rem;
  background: url('../../public/imgs/login_bg.jpg') no-repeat;
  background-size:cover;
}
.logostyle{
  width:3.75rem;
}
.inputstyle{
  width:80%;
  margin-left:2.25rem; 
}
.unamestyle{
  margin-top:4rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.1);
}
.upwdstyle{
  margin-top:1rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.1);
}
.loginstyle{
  margin:1rem 0 10rem;
  width:40%;
  height:2rem;
  border-radius: 1rem;
  line-height: 2rem;
  color:#ff0;
  background:rgba(0,0,0,0.2) 
}
.textstyle{
  color:#0ff;
  font-weight:bold;
}
.jumpstyle{
  color:#ff0;
}
.van-cell-group{
  background-color:rgba(0,0,0,0);
}
</style>