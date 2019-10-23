<template>
  <div>
    
    <!-- tabbar组件
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="tab1" @click.native="changeState(0)" class="downtext">
        <tabbaricon
          :selectedImage="require('../../public/imgs/index2.png')"
          :normalImage="require('../../public/imgs/index.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="changeState(1)" class="downtext">
        <tabbaricon
          :selectedImage="require('../../public/imgs/share2.png')"
          :normalImage="require('../../public/imgs/share.png')"
          :focused="currentIndex[1].isSelect">
         </tabbaricon>
        宠圈
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="changeState(2)" class="downtext">
        <tabbaricon
          :selectedImage="require('../../public/imgs/add2.png')"
          :normalImage="require('../../public/imgs/add.png')"
          :focused="currentIndex[2].isSelect">
         </tabbaricon>
        发布
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="changeState(3)" class="downtext">
        <tabbaricon
          :selectedImage="require('../../public/imgs/msg2.png')"
          :normalImage="require('../../public/imgs/msg.png')"
          :focused="currentIndex[3].isSelect">
         </tabbaricon>
        消息 
      </mt-tab-item>
      <mt-tab-item id="tab5" @click.native="changeState(4)" class="downtext">
        <tabbaricon
          :selectedImage="require('../../public/imgs/me2.png')"
          :normalImage="require('../../public/imgs/me.png')"
          :focused="currentIndex[4].isSelect">
         </tabbaricon>
        我的 
      </mt-tab-item>
    </mt-tabbar> -->

    <!-- 页面 -->
    <!-- <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <Nav></Nav>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <Petcircle></Petcircle>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <Addstory></Addstory>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <Addstory></Addstory>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab5">
        <Addstory></Addstory>
      </mt-tab-container-item>
    </mt-tab-container> -->
    <nav></nav>
    
   
  </div>
</template>
<script>
  import Nav from './Nav.vue'
  import Petcircle from './Petcircle.vue'
  import Addstory from './Addstory.vue'
  import Tabbaricon from '../components/Tabbaricon.vue'
  
  export default {
  data() {
    return {
      active: "tab1",
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
  // 注册子组件
  components:{
    "Nav":Nav,
    "Petcircle":Petcircle,
    "Addstory":Addstory,
    "tabbaricon":Tabbaricon
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
  
}
</script>
<style>
  .downtext{color:#f7bf25}
</style>