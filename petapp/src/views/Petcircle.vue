<template>
  <div>
    <navbar></navbar>
    <van-tabs v-model="active" color="#f7bf25">
      <van-tab title="最新">
        <newstory></newstory>
      </van-tab>
      <van-tab title="发现">
        <find></find>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Newstory from "./Newstory"
import Find from './Find.vue'
// 引入底部导航栏
import Navbar from "../components/Navbar"
  export default{
    data(){
      return{
        active:0
      }
    },
    components:{
      "newstory":Newstory,
      "find":Find,
      "navbar":Navbar
    }
  }
</script>