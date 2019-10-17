<template>
<div>
  <!-- 顶部导航，进入寄养家庭 -->
  <div>
    <ul class="jumpstyle">
      <li class="listyle">Hi 想让他住哪里</li>
      <li><input class="inputstyle" disabled placeholder="找附近的寄样家庭" type="text"></li>
    </ul>
  </div>
  <!-- 导航条 -->
  <div>
    <ul class="actstyle">
      <li>
        申请家庭    
      </li>|
      <li>
        宠物指南
      </li>|
      <li>
        保障服务
      </li>
    </ul>
  </div>
  <!-- 轮播 -->
  <div>
    <span>精选</span>
    <swipe></swipe>
  </div>
  <!-- 图片 -->
  <img src="../../public/imgs/cat01.png" alt="">
  <div>

  </div>
  <!-- 中部导航 发布寄养+合作医院 -->
  <div>
    <span>你可能想要</span>
    <ul>
      <li>
        <img src="" alt="">
        <span>发布寄养</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Swipe from "../components/Swipe"
export default {
  data(){
    return{
      
    }
  },
  components: {
    "swipe":Swipe
  },
  methods:{

  }  
}
</script>
<style scoped>
.jumpstyle{
  display:flex;
  width:100%;
  justify-content: center;
  align-items: center;
  padding:1rem 0 1rem 1rem;
  background:#f7bf25;
  display:flex;
  align-items: center;
  box-sizing:border-box;
}
.listyle{
  font:18px  "隶书";
}
.inputstyle{
  display:flex;
  text-align:center;
  margin-left:1rem;
  height:1.5rem;
  width:8rem;
  border:0;
  border-radius: 16px;
  font-size:12px;
  padding:0.25rem;
}
.actstyle{
  display:flex;
  padding:1rem;
  justify-content: space-around;
}
</style>