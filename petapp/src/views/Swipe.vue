<template>
    <div>
        <van-swipe :width="400" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) of images" :key="index" >
            <img :src="require(`../assets/${image}`)" class="imgstyle"/>
          </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        images: [
          'swipe1.png',
          'swipe2.png',
          'swipe3.png',
        ]
      };
    }
}
</script>
<style scoped>
  .imgstyle{
    width:100%;
    height:50%;
  }
</style>
