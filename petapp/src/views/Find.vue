<template>
  <div>
    <swipe></swipe>
    <div class="box">
      <!-- 推荐阅读 -->
      <h4 class="top">推荐阅读</h4>
      <div class="read" v-for="(item,i) of list" :key="i" @click="details">
        <!-- 左侧图片 -->
        <div class="rpic">
          <img :src="require('../../public/imgs/'+item.pic)" alt="" class="pic">
        </div>
        <!-- 右侧内容 -->
        <div>
          <h4>{{item.title}}</h4>
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="time">{{item.time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swipe from '../components/Swipe.vue'
export default {
  data(){
    return{
      list:[
        {pic:"cat01.png",title:"铛铛铛~迟来的毛孩子福利",subtitle:"汪星人人最爱的小黄球",time:"2019-10-12"},
        {pic:"cat08.jpg",title:"营养不均衡让狗狗有皮肤病",subtitle:"狗狗皮肤病的科学",time:"2019-10-19"},
        {pic:"dog03.jpg",title:"上班也不忘准备毛孩子的口粮",subtitle:"再忙也别委屈了毛孩子",time:"2019-1-13"},
        {pic:"dog04.jpg",title:"周末新秀~三文鱼蛋糕",subtitle:"快来尝尝鲜",time:"2019-10-05"},
        {pic:"dog05.jpg",title:"狗狗美毛零食~肌肉奶酪曲奇",subtitle:"自制狗狗零食",time:"2019-10-11"},
        {pic:"dog09.jpg",title:"铛铛铛~迟来的毛孩子福利",subtitle:"汪星人人最爱的小黄球",time:"2019-10-12"},

      ]
    }
  },
  methods:{
    details(){
      this.$router.push('/Detailstory')
    }
  },
  components:{
    "swipe":Swipe
  }
}
</script>
<style scoped>
  .box{
    margin-top:90px;
    margin-bottom:60px;
  }
  .top{
    margin:0;
    padding-left:10px;
  }
  .top>h4{
    margin:0;padding:0;
  }
  .read{
    display:flex;
    border-bottom: 1px solid #ccc;
    padding:10px;
    height:130px;
  }
  .rpic{
    width:35%;
    margin-right:10px;
  }
  .pic{
    width:100%;
    height:100%;
    border-radius: 20px;
  }
  .subtitle{
    color:#333;
  }
  .time{
    margin-bottom:0;
  }
</style>