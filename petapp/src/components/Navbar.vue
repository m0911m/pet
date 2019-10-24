<template>
  <div>
    <mt-header class="header" fixed>
      <router-link :to="{path:'/Nav'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
        <mt-button slot="left">西安</mt-button>
        <mt-button slot="right">选择寄养时间</mt-button>
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
<style>
/* 最外层 */
.mint-header.is-fixed {
  width:100%;
  height:4rem;
  padding:0;
  background-color:#f2f2f2;
  color:#040404;
}
/* 左侧按钮 */
.mintui-back:before{
 padding-left:1rem;
 font-size:1.875rem;
} 
/* 市区 */
label{
  padding-left:1.5rem;
  font-size:1rem;
  widows: 100px;
}
</style>