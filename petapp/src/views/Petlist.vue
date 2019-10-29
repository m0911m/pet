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
    <div class="pet1" v-for="(item,i) of list" :key="i">
      <div >
        <div class="round size1">
          <img class="img1" :src="item.animal_img">
        </div>
        <div class="round size2">
          <img class="img2" src="../assets/image/1.png" alt="">
         </div>
      </div>
      <div class="pet2">
        <div>{{item.animal_type}}</div>
        <div>{{item.animal_age}}岁</div>
        <div>{{item.animal_weight}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{list:[]};
  },
  created() {
    this.onload();
  },
  methods: {
    back(){
      this.$router.push("/Mine");
    },
    onload(){
      //发送axios请求
      var url="user/selectpetmessage";
      this.axios.get(url)
      .then(res=>{
        // console.log(res);
        // 判断未登录时跳转到登录页面
        if(res.data.code==402){
           this.$messagebox("消息","请登录").then(res=>{
            this.$router.push("/Login");
          })
        }else{
          this.list=res.data.data
          // console.log(res);
        }
      })
    }
  },
}
</script>
<style scoped>
  .listheader{
    display: flex;
    justify-content: space-between;
    margin: 8px 8px;
  }
  .pet1{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border: 1px solid #ccc;
    width: 90%;
    height: 50px;
    margin:10px auto;
    position: relative;
    border-radius: 3px;
  }
  .round{
    border: 1px solid transparent;
    border-radius: 50%;
    overflow: hidden;
  }
  .size1{
    width:60px;
    height: 60px;
    position: absolute;
    top:-10px;
    left:20px;
  }
  .size2{
    width:20px;
    height:20px;
    position: absolute;
    top:20px;
    left:60px;
    z-index: 2;
  }
  .pet2{
    width:70%;
    display: flex;
    justify-content: space-around;
    color: #388;
    margin-top:10px;
  }
  .img1{
    width: 60px;
    height: 60px;
  }
  .img2{
    width:20px;
    height: 20px;
  }
</style>
