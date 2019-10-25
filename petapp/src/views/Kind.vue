<template>
  <div>
    <!-- 1.种类头部 -->
    <div class="kindheader">
      <!-- 1.1左边 返回-->
      <div>
        <router-link to="/Petmessage">
          <van-icon name="arrow-left" />
        </router-link>
      </div>
      <!-- 1.2标题 -->
      <div>
        宠物品种
      </div>
      <!-- 1.3右边 确定 -->
      <div>
        <router-link  to="/Petmessage">确定</router-link>
      </div>
    </div>
    <hr>
    <!-- 2宠物种类输入框 -->
    <div>
      <van-search placeholder="请输入宠物种类" v-model="value" />
    </div>
    <!-- 3.宠物种类切换面板按钮 -->
    <div class="container">
      <div data-id="tab1" @click="handle">狗</div>
      <div>|</div>
      <div data-id="tab2" @click="handle">猫</div>
      <div>|</div>
      <div data-id="tab3" @click="handle">小宠</div>
    </div>
    <!-- 4.宠物种类子面板 -->
    <mt-tab-container v-model="active" class="textleft">
      <!-- 狗种类子面板 -->
      <mt-tab-container-item id="tab1">
        <van-index-bar>
          <div  v-for="item in station1" :key="item.id">
            <van-index-anchor :index="item.index" />
            <van-cell  :title="item.Name" @click="handle1"/>
          </div>
        </van-index-bar>
      </mt-tab-container-item>
      <!-- 猫种类子面板 -->
      <mt-tab-container-item id="tab2">
        <van-index-bar>
          <div  v-for="item in station2" :key="item.id">
            <van-index-anchor :index="item.index" />
            <van-cell  :title="item.Name" @click="handle1"/>
           </div>
        </van-index-bar>
      </mt-tab-container-item>
      <!-- 小宠种类子面板 -->
      <mt-tab-container-item id="tab3">
         <van-index-bar>
           <div  v-for="item in station3" :key="item.id">
            <van-index-anchor :index="item.index" />
            <van-cell  :title="item.Name" @click="handle1"/>
           </div>
        </van-index-bar>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import SMALL from "../assets/js/kind.js"
export default {
  data(){
    return{
      value:"",
      active:"tab1",
      station1:SMALL.dogData(),
      station2:SMALL.catData(),
      station3:SMALL.smallData(),
      }
  },
   methods:{
     handle1(e){
       console.log(e.currentTarget.innerText);
     },
    handle(e){
      var id=e.target.dataset.id;
      this.active=id;
    }
  }
}
</script>
<style scoped>
  .kindheader{
    display: flex;
    justify-content: space-between;
    margin: 8px 8px;
  }
  .container{
    display: flex;
    justify-content: space-around;
  }
  .textleft{
    text-align: left;
  }
</style>