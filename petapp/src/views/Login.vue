<template>
  <div>
    <van-image width="100" height="100" :src="require('../../public/imgs/logo.jpg')"/>
    <van-cell-group>
      <van-field v-model="uname" label="用户名:" clearable placeholder="请输入手机号"></van-field>
      <van-field v-model="upwd" label="密码:" clearable type="password" :attr="{autofocus:true}" placeholder="请输入密码"></van-field>
      <van-button @click="login">登录</van-button>
      <van-popup v-model="show" position="top">{{msg}}</van-popup>
    </van-cell-group>
  </div>
</template>
<script>
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
    }
  }
}
</script>
<style scoped>

</style>