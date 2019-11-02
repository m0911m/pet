<template>
  <div class="reg">
    <!-- 背景图片 -->
    <img :src="require('../../public/imgs/bg1.jpg')" alt="" class="imgstyle">
    <div class="container">
      <van-cell-group class="inputstyle">
        <!-- logo -->
        <van-image class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
        <van-field class="unamestyle" v-model="uphone" v-on:blur="onblur" label="用户名" placeholder="请输入用户名"/>
        <van-field class="upwdstyle" v-model="upwd" type="password" v-on:blur="pwdonblur" label="密码" placeholder="请输入密码"/>
        <van-field class="apwdstyle" v-model="apwd" type="password" v-on:blur="apwdonblur" label="确认密码" placeholder="请再次输入密码"/>
        <van-field class="umsgstyle" v-model="umsg" center clearable label="短信验证码" placeholder="请输入验证码" disabled>
         <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      <van-button class="regstyle" @click="reg">注册</van-button>
     </van-cell-group>
    </div>
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
      apwd:"",
      umsg:"",
    }
  },
  methods:{
    onblur(){
      // 创建手机号正则和密码(6-16位字母数字)正则
      var nreg=/^1[3-9]\d{9}$/; //手机
      var ureg=/^\d{6,16}$/ ;  //密码
      // 验证用户名 
      // 判断是否为空
      if(this.uphone==""){
        this.$dialog.alert({ message:"请输入手机号" });
        this.uphone="";
        return;
      }else{
        var n=this.uphone;
        // 如果不为空，判断是否满足正则表达式
        if(nreg.test(n)==false){
          this.$dialog.alert({
            message: "输入的手机号码格式不正确", //改变弹出框的内容
          });
          this.uphone="";
          return;
        }else{
          // 如果格式正确，判断是否已存在
          this.axios.get('/user/isreg',{params:{uphone:n}})
          .then(response=>{
            if(response.data.code==402){
              this.$dialog.alert({message: "该号码已被注册"})
              this.uphone="";
              return;
            }
          })
        }
      }
    },
    pwdonblur(){
      var u=this.upwd;
      var ureg=/^\d{6,16}$/;
      // 判断是否为空
      if(this.upwd==""){
        this.$dialog.alert({
          message:"请输入密码" 
        });
        return;
      }else{
        // 如果不为空，判断格式
        if(ureg.test(u)==false){
          this.$dialog.alert({
            message: "密码格式不正确", //改变弹出框的内容
          });
          this.upwd="";
          return;
        }
      }
      
    },
    apwdonblur(){
      var upwd=this.upwd;
      var apwd=this.apwd;
      if(apwd!==upwd){
        this.$dialog.alert({
          message:"两次输入的密码不一致",
        });
        this.apwd="";
        return;
      }
    },
    reg(){
      if(this.uphone==""){
        this.$dialog.alert({
          message:"请输入手机号"
        }).then(() => {return;})  
      }
      else{ 
        if(this.upwd==""){
          this.$dialog.alert({
            message:"请输入密码" 
          }).then(() => { return;}) 
        }
        else{ 
          if(this.apwd==""){
            this.$dialog.alert({
              message:"请确认密码"
            }).then(() => { return;})
          }
          else{
            var uphone=this.uphone
            var upwd=this.upwd
            var obj={uphone:uphone,upwd:upwd}
            var url="user/reg"
            // 发送axios请求
            this.axios.post(url,qs.stringify(obj)).then(response=>{
              if(response.data.code==200){
                // console.log(response)
                this.$dialog.alert({
                  message:"注册成功"
                }).then(()=>{
                  this.$router.push({path:'/login'})
                })
              }
              else{
                this.$dialog.alert({
                  message:"注册失败"
                }).then(()=>{
                  this.$router.push({path:'/regtest'})
                }) 
              }
            })       
          }//else end
        }
      }
    }
  }
  
}
</script>
<style scoped>
  .reg{
    display:flex;
    position:fixed;
    width:100%;
    height:100%;
    text-align: center;
    box-sizing: border-box;
  }
  .imgstyle{
    position:relative;
    width:100%;
    height:100%;
    filter: blur(5px);
  }
.logostyle{
   position:absolute;
   top:0;
   left:0;
   width:3.75rem;
   top:-6.25rem;
   left: 50%;
   margin-left:-1.33rem;
}
.inputstyle{
  position: absolute;
  width:80%;
  top:35%;
  left:10%;
  text-align: left;
}
.unamestyle{
  position: absolute;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.8);
}
.upwdstyle{
  position: absolute;
  top:3rem;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.8);
}
.apwdstyle{
  position: absolute;
  top:6rem;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.8);
}
.umsgstyle{
  position: absolute;
  top:9rem;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.8);
}
.regstyle{
  position:absolute;
  top:13rem;
  left:0;
  width:100%;
  height:2rem;
  border-radius: 1rem;
  line-height: 2rem;
  color:#000;
  background:rgba(255,255,255,0.8); 
}
</style>