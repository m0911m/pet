<template>
  <div>
    <!-- tabbar组件 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="message" @click.native="changeState(0)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
        {{msg[0]}}
      </mt-tab-item>
      <mt-tab-item id="contact" @click.native="changeState(1)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[1].isSelect">
         </tabbaricon>
        {{msg[1]}}
      </mt-tab-item>
      <mt-tab-item id="find" @click.native="changeState(2)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[2].isSelect">
         </tabbaricon>
        {{msg[2]}}
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="changeState(3)">
        <tabbaricon
          :selectedImage="require('../../public/imgs/heart.png')"
          :normalImage="require('../../public/imgs/heart_red.png')"
          :focused="currentIndex[3].isSelect">
         </tabbaricon>
        {{msg[3]}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Tabbaricon from '../components/Tabbaricon.vue'
export default {
  data(){
    return{
      // 面板中显示子组件的id
      active:"message",
      msg:["首页","宠圈","消息","我的"],
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
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
       //判断如果循环下标与n相等 20
       if(n==i){
        //当前下标元素true
        this.currentIndex[i].isSelect=true;
       }else{
        //其它元素修改false
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