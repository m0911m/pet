<template>
  <div>
    <!-- tabbar组件 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="tab1" @click.native="changeState(0)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="changeState(1)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[1].isSelect">
         </tabbaricon>
        宠圈
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="changeState(2)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[2].isSelect">
         </tabbaricon>
        发布
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="changeState(3)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[3].isSelect">
         </tabbaricon>
        消息 
      </mt-tab-item>
      <mt-tab-item id="tab5" @click.native="changeState(4)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[4].isSelect">
         </tabbaricon>
        我的 
      </mt-tab-item>
    </mt-tabbar>

    <!-- 页面 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <nav></nav>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <petcircle></petcircle>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <addstory></addstory>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <addstory></addstory>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab5">
        <addstory></addstory>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Tabbaricon from '../components/Tabbaricon.vue'
export default {
  data(){
    return{
      // 面板中显示子组件的id
      active:"message",
      
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
methods: {
    //  点击每个按钮触发函数
    changeState(n){
      //将当前参数下标对应数组值修改true其它修改false
      //创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //判断如果循环下标与n相等 
       if(n==i){
        //当前下标元素
        this.currentIndex[i].isSelect=true;
       }else{
        //其它元素修改
        this.currentIndex[i].isSelect=false;
       }      
      }
    }
  },
  components:{
    "tabbaricon":Tabbaricon
  }
}
</script>
<style scoped>
  
</style>