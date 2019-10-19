<template>
  <div>
    <img class="imgstyle" :src="focused?selectedImage:normalImage" alt="">
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
  }
}
</script>
<style scoped>
.imagestyle{
  width:30px;
  height:30px;
}
</style>