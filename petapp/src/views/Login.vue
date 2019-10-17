<template>
  <div class="login">
    <!-- logo图片 -->
    <van-image width="80" class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
    <van-cell-group class="inputstyle">
    <van-field class="unamestyle" v-model="uname" label="用户名:" clearable placeholder="请输入用户名/手机号"></van-field>
    <van-field class="upwdstyle" v-model="upwd" label="密码:" clearable type="password" placeholder="请输入密码"></van-field>
      <van-button class="loginstyle" @click="login">登录</van-button>
      <van-popup v-model="show" position="top">{{msg}}</van-popup>
    </van-cell-group>
    <div class="textstyle">
    <span>您还没有账号?</span>
      <router-link class="jumpstyle" :to="{path:'/Register'}">注册</router-link>   
    </div>
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
      // 获取用户输入的手机号/用户名和密码
      var n=this.uname;
      var u=this.upwd;
      // 创建手机号/用户名正则和密码(6-16位字母数字)正则
      var nreg=/^(1[3-9]\d{9})$/
      var mreg=/^\d{3,12}$/
      var ureg=/^\d{6,16}$/
      // 验证用户名 
      if(nreg.test(n)==false){
        //验证不成功 弹出层弹出提示信息
        this.msg="手机格式有误,请重新输入";
        this.show=true;
      }
      // 验证密码
      if(ureg.test(u)==false){
        // 验证密码不成功,弹出提示信息
        this.msg="密码格式有误,请重新输入";
        this.show=true;
        return;
      }
      // 发送ajax请求
      var url="/user";
      var obj={unam:n,upwd:u}
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
        console.log(res.data);
      })
    }
  }
}
</script>
<style scoped>
.login{
  height:41.6rem;
  text-align: center;
  box-sizing: border-box;
  padding-top:3.55rem;
  background: url('../../public/imgs/bg.jpg') no-repeat;
  background-size:cover;
}

.unamestyle{
  margin-top:4rem;
}
.upwdstyle{
  margin-top:1rem;
}
.loginstyle{
  margin-top:1rem;
  width:100%;
  height:2rem;
  line-height: 2rem;
  color:#fff;
  border:1px solid #ff0;
  background:rgba(0,0,0,0.5)
  
}
.textstyle{
  margin:0 auto;
  width:40%;
  margin-top:7rem;
  color:#0ff;
  font-weight:bold;
  background-color:rgba(0,0,0,.5);

}
.jumpstyle{
  color:#ff0;
}
.van-cell-group{
  background-color:rgba(0,0,0,0);
}
</style>