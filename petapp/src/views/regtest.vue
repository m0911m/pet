<template>
  <div>
    <van-cell-group>
  <van-field
    v-model="uname" 
    v-on:blur="onblur"
    label="用户名"
    placeholder="请输入用户名"
    error-massage="错误"
  />
  <van-field
    v-model="upwd"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
 
</van-cell-group>
<van-cell-group>
  <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
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
      // 保存弹出层的属性
      show:false,
      msg:""
    }
  },
  methods:{
    onblur(){
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
        this.axios.get('/user/isreg',uname)
        .then(response=>{
            if(!response.data.code>0){
          this.$dialog.alert({
         message: "输入的手机号码格式不正确",
          }).then(()=>{
            return;
          })
      }
        })
      }
    },
      
    
   
  }
  
}
</script>