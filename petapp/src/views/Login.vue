<template>
  <div class="login">
    <!-- logo图片 -->
    <van-image width="80" class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
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
      var nreg=/^1[3-9]\d{9}$/
      var ureg=/^\d{6,16}$/
      // 验证用户名 
      if(nreg.test(n)==false){
        //验证不成功 弹出层弹出提示信息
        this.msg="手机格式有误,请重新输入";
        this.show=true;
        return;
      }
      // 验证密码
      if(ureg.test(u)==false){
        // 验证密码不成功,弹出提示信息
        this.msg="密码格式有误,请重新输入";
        this.show=true;
        return;
      }
      // 发送axios请求
       var url="user/login"
       var obj={uname:n,upwd:u}
      // this.axios.post(
      //   url,
      //   qs.stringify(obj)
      // ).then(res=>{
      //   console.log(res);
      //})
       this.axios.post(url,qs.stringify(obj))
        .then(function (response) {
        console.log(response);
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
  padding-top:3.55rem;
  padding-bottom:6.25rem;
  background: url('../../public/imgs/login_bg.jpg') no-repeat;
  background-size:cover;
}
.unamestyle{
  margin-top:4rem;
}
.upwdstyle{
  margin-top:1rem;
}
.loginstyle{
  margin:1rem 0 10rem;
  width:40%;
  height:2rem;
  line-height: 2rem;
  background:rgba(0,0,0,0)
  
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