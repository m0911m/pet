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
      <li class="cwstyle">
        申请家庭
        <img src="../../public/imgs/heart_red.png" alt="">   
      </li>|
      <li class="cwstyle">
        宠物指南
        <img src="../../public/imgs/heart_red.png" alt="">   
      </li>|
      <li class="cwstyle">
        保障服务
        <img src="../../public/imgs/heart_red.png" alt="">   
      </li>
    </ul>
  </div>
  <!-- 轮播 -->
  <div class="swipestyle">
    <swipe></swipe>
  </div>

  <div>

  </div>
  <!-- 中部导航 发布寄养+合作医院 -->
  <div class="textstyle">
    <span>你可能想要</span>
    <ul class="middlestyle">
      <li class="listyle">
        <img src="../../public/imgs/park.png" alt="">
        <span>发布寄养</span>
      </li> 
      <li class="listyle">
        <img src="../../public/imgs/park.png" alt="">
        <span>积分商城</span>
      </li>      
      <li class="listyle">
        <img src="../../public/imgs/park.png" alt="">
        <span>合作医院</span>
      </li>
    </ul>
    <!-- 为你推荐 -->
    <div>
      <span>为你推荐</span>


    </div>
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
  justify-content: space-around;
  align-items: center;
  padding:1rem;
}
.cwstyle{
  display:flex;
  align-content: center;
}

.middlestyle{
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.listyle{
  display:flex;
  flex-direction: column;
  font-size:0.875rem;
}
.swipestyle{
  height:200px;
  display:flex;
  flex-direction: column;
  text-align: center;
}
.textstyle{
  display:flex;
  flex-direction: column;
  text-align: center;
}
</style>