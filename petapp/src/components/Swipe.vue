<template>
    <div class="swipeStyle">
        <van-swipe :width="400" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) of images" :key="index" >
            <img :src="require(`../../public/imgs/${image}`)" class="imgstyle" fit="contain"/>
          </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        images: [
          'swipe1.jpg',
          'swipe2.jpg',
          'swipe3.jpg',
          'swipe4.jpg',
        ]
      };
    }
}
</script>
<style scoped>
  .swipeStyle{
    width:100%;
    height:100px;
  }
  .imgstyle{
    width:100%;
    height:175px;
  }
</style>
