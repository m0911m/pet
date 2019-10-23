<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="公告" >
        <div class="box1">

        </div>
      </van-tab>
      <van-tab title="消息">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        active:0
      }
    }
  }
</script>
<style scoped>
  .box1{
    width:100%;
    height:300px;
    background: #ccc;
  }
</style>