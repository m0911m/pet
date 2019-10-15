<template>
  <div>
    <van-image width="100" height="100" :src="require('../../public/imgs/logo.jpg')"/>
    <van-cell-group>
      <van-field v-model="uname" label="用户名" placeholder="请输入手机号"></van-field>
      <van-field v-model="upwd" label="密码" type="password" :attr="{autofocus:true}" placeholder="请输入密码"></van-field>
      <van-button @click="login">登录</van-button>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:""
    }
  },
  methods:{
    login(){
      var n=this.uname;
      var u=this.upwd;
    }
  }
}
</script>
<style scoped>

</style>