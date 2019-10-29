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
      <div>
        <div class="round size1">
          <img class="img1" :src="item.animal_img">
        </div>
        <div class="round size2">
          <img class="img2" :src="item.animal_sex?Male:Female" alt="">
         </div>
      </div>
      <div class="pet2">
        <div>{{item.animal_type}}</div>
        <div>{{item.animal_bir}}</div>
        <div>{{item.animal_weight}}</div>
      </div>
      <div @click="del" class="del" :data-aid="item.aid">删除</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[],
      // item.animal_sex?Male:Female
      Male:require('../assets/image/1.png'),
      Female:require('../assets/image/0.png')
      };
  },
  created() {
    this.onload();
  },
  methods: {
    back(){
      this.$router.push("/Mine");
    },
    del(event){
     //交互提示:是否删除
      this.$messagebox.confirm("是否删除")
      .then(res=>{
        var aid=event.target.dataset.aid;
        var url="user/delpetmessage";
        var obj={aid};
        this.axios.get(url,{params:obj})
        .then(res=>{
          // console.log(res);
          if(res.data.code==200){
            this.$toast("删除成功")
            this.loadMore(); 
          }
        })
      }).catch(err=>{})
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
    left:7px;
  }
  .size2{
    width:20px;
    height:20px;
    position: absolute;
    top:20px;
    left:45px;
    z-index: 2;
  }
  .pet2{
    width:60%;
    display: flex;
    justify-content: space-around;
    color: #388;
    margin-top:14px;
    padding-left:40px;
    font-size:13px;
  }
  .img1{
    width: 60px;
    height: 60px;
  }
  .img2{
    width:20px;
    height: 20px;
  }
  .del{
    color: #388;
    margin-top:10px;
  }
</style>
