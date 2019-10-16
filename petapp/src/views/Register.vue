<template>
  <div>
    <van-field class="unamestyle" v-model="uname" label="用户名:" clearable placeholder="请输入手机号"></van-field>
    <van-field class="upwdstyle" v-model="upwd" label="密码:" clearable type="password" :attr="{autofocus:true}" placeholder="请输入密码"></van-field>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>