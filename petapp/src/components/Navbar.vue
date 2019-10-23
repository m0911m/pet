<template>
  <div>
    <mt-header fixed>
      <router-link :to="{path:'/Nav'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
        <mt-button slot="left">西安</mt-button>
        <input slot="left" type="text" placeholder="选择寄养时间">
        <mt-button slot="right">
          <van-icon name="location-o"></van-icon>
        </mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.mint-header.is-fixed {
  width:100%;
  height:3rem;
  padding:0;
  background-color:#f2f2f2;
}

</style>