<template>
  <div>
    <!-- 列表头部 -->
    <div class="msgheader">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>
        宠物信息
      </div>
      <div>
        <router-link  to="/Petlist" class="headerright">
          保存
        </router-link>
      </div>
    </div>
    <hr>
    <!-- 详细信息 -->
    <div>
    
    </div>
    <!-- te别信息 -->
    <div>

    </div>
    <!-- 宠物简介 -->
  </div>
</template>
<style scoped>
  .msgheader{
    display:flex;
    justify-content: space-between;
  }
  .headerright{
    color: #000;
  }
</style>