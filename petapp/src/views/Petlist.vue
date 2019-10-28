<template>
  <div>
    <!-- 1.列表头部 -->
    <div class="listheader">
      <!--1.1左边 返回  -->
      <div @click="back">
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
    <div>
      <div>
        <img src="../assets/logo.png" alt="">
        <img src="" alt="">
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{list:[]};
  },
  // created() {
  //   this.onload();
  // },
  methods: {
    back(){
      this.$router.push("/Mine");
    },
  //   onload(){
  //     //发送axios请求
  //     var url="user/selectpetmessage";
  //     this.axios.get(url)
  //     .then(res=>{
  //       // console.log(res);
  //       // 判断未登录时跳转到登录页面
  //       if(res.data.code==402){
  //          this.$messagebox("消息","请登录").then(res=>{
  //           this.$router.push("/Login");
  //         })
  //       }else{
  //         this.list=res.data.data
  //       }
  //     })
  //   }
  },
}
</script>
<style scoped>
  .listheader{
    display: flex;
    justify-content: space-between;
    margin: 8px 8px;
  }
</style>
