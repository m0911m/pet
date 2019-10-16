<template>
  <div>
    <!-- 1.列表头部 -->
    <div class="listheader">
      <!--1.1左边 返回  -->
      <div>
        <van-icon name="arrow-left" />
      </div>
      <!-- 1.2标题 -->
      <div>
        宠物列表
      </div>
      <!-- 1.3右边 添加宠物信息 -->
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
    margin: 8px 8px;
  }
</style>
