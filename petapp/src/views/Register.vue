<template>
  <div class="register">
      <van-image width="80" class="logostyle" :src="require('../../public/imgs/logo.jpg')"/>
      <van-field class="unamestyle" v-model="uname" label="用户名:" :attr="{autofocus:true}" clearable placeholder="请输入手机号"></van-field>
      <van-field class="upwdstyle" v-model="upwd" label="密码:" clearable type="password"  placeholder="请输入密码"></van-field>
    <van-radio-group v-model="radio">
      <van-radio checked-color="#07c160">注册</van-radio>
    </van-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio:"",
      uname:"",
    }
  },
}
</script>
<style scoped>
.register{
  height:41.6rem;
  text-align: center;
  box-sizing: border-box;
  padding-top:3.55rem;
  background: url('../../public/imgs/bg.jpg') no-repeat;
  background-size:cover;
  margin:0 auto;
}

.unamestyle{
  margin-top:4rem;
}
.upwdstyle{
  margin-top:1rem;
}
.van-radio{
  margin-top:1rem;
}
</style>