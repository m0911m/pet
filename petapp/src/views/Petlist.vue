<template>
  <div>
    <!-- 列表头部 -->
    <div class="listheader">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>
        宠物列表
      </div>
      <div>
        <router-link  to="/Petmessage">
          <van-icon name="add-o" />
        </router-link>
      </div>
    </div>
    <hr>
  </div>
</template>
<style scoped>
  .listheader{
    display: flex;
    justify-content: space-between;
  }
</style>
