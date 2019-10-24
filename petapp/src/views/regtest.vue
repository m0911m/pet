<template>
  <div>
    <van-cell-group>
  <van-field
    v-model="uname" 
    v-on:blur="uponblur"
    label="用户名"
    placeholder="请输入用户名"
    error-massage="错误"
  />
  <van-field
    v-model="upwd"
    v-on:blur="pwdonblur"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
  <van-field
    v-model="aupwd"
    v-on:blur="apwdonblur"
    type="password"
    label="确认密码"
    placeholder="请再次输入密码"
  />
 
</van-cell-group>
<van-cell-group>
  <van-field
    v-model="umessage"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
  <van-button class="loginstyle" @click="reg">登录</van-button>
</van-cell-group>
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
      aupwd:"",
      umessage:""
    }
  },
  methods:{
    uponblur(){
      var n=this.uname;
      var u=this.upwd;
      // 创建手机号正则和密码(6-16位字母数字)正则
      var nreg=/^1[3-9]\d{9}$/ //手机
      var ureg=/^\d{6,16}$/   //密码
      // 验证用户名 
      if(nreg.test(n)==false){
        this.$dialog.alert({
         message: "输入的手机号码格式不正确", //改变弹出框的内容
        })
      .then(() => { 
      return;
      })
      }else{
        this.axios.get('/user/isreg',{
          params:{
            uname:n
          }
         }
        )
        .then(response=>{
        console.log(response)
            if(response.data.code==-1){
          this.$dialog.alert({
         message: "该手机号码已被注册",
          }).then(()=>{
            return;
          })
      }
        })
      }
    },
     pwdonblur(){
       var u=this.upwd;
       var ureg=/^\d{6,16}$/
       if(ureg.test(u)==false){
         this.$dialog.alert({
          message: "密码格式不正确", //改变弹出框的内容
         })
       .then(() => { 
       return;
       })
       }
   },
    apwdonblur(){
        var upwd=this.upwd;
        console.log(upwd)
        
        var aupwd=this.aupwd;
        console.log(aupwd)
        if(aupwd!==upwd){
          this.$dialog.alert({
            message:"两次输入的密码不一致",
          })
        }
     },
     reg(){
       var uname=this.uname
       var upwd=this.upwd
       var url="user/reg"
       //发送axios请求
       this.axios.post(url,qs.stringify(uname,upwd)).then(response=>{
         if(response.data.code>0){
           this.$dialog.alert({
             message:"注册成功"
           }).then(()=>{
             this.$router.push({path:'/login'})
           })
         }else{this.$dialog.alert({
             message:"注册失败"
           })
         }
       })
       
     }
  }
 }

</script>