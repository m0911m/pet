<template>
  <div class="swipestyle">
    <van-swipe :width="400" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,i) of images" :key="i">
        <img :src="'http://127.0.0.1:5050/'+images[i].luobo_url" class="imgstyle" fit="contain">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
data(){
  return{
    images:[]
  };
},
created(){
  this.image()
},
methods:{
  image(){
    var url="news/selectlunbo";
    this.axios.get(url).then(res=>{
    this.images=res.data.data;
    })
   }
  }
}
</script>
<style scoped>
.swipestyle{
  display:flex;
  width:100%;
}
.imgstyle{
  width:100%;
  height:10rem;
}
</style>
