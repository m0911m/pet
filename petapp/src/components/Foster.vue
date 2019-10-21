<template>
  <div>
    <div class="fosstyle">
      <!-- 寄养家庭的组件 -->
      <!-- 上方的信息 -->
      <div class="userstyle">
        <img class="famstyle" :src="require('../../public/imgs/family0.jpg')" alt="">
        <!-- 用户头像 -->
        <img class="imgstyle" :src="require('../../public/imgs/family_user0.jpg')" alt="">
        <!-- 左边的价格 -->
        <div class="bgstyle">
          <span class="typestyle">寄养价格
            <a class="numstyle">¥35</a>
            起
          </span> 
          <span class="ordstyle">随时可以接单</span>
        </div>
      </div>
      <!-- 下方的信息 -->
      <!-- 用户名称 评分 -->
      <div class="understyle">
        <span class="namestyle">小福的家</span>
        <span class="gradestyle">评分<a href="" class="scorestyle">5.0</a></span>
      </div>
      <div class="addstyle">
        <span class="icon"><img :src="require('../../public/imgs/heart_red.png')" alt=""></span>
        <ul class="locstyle">
          <li class="sitstyle">新科大厦</li>|
          <li class="gapstyle">距我0.3km</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
/* 寄养家庭组件 */
.fosstyle{
  margin:1rem 0;
  box-sizing: border-box;
}
.userstyle{
  position: relative;
  display:flex;
  padding:0 1rem;
}
/* 用户家庭图片 */
.famstyle{
  position:flxed;
  width:100%;
  height:13rem;
  border-radius: 1rem;
}
/* 用户头像 */
.imgstyle{
  position:absolute;
  right:2.5rem;
  bottom:-0.5rem;
  width:4rem;
  border-radius: 50%;
  border:1px solid #fff;
}
/* 左边的寄养价格 */
.bgstyle{
  position:absolute;
  bottom: 2rem;
  left: 2rem;
  color:rgb(255,255,255,0.9);
  display:flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 1rem;
  width:40%;
  height:5rem;
  flex-direction: column;
  background-color:rgba(0,0,0,0.4);
  font:14px 楷体;
}
/* 上边字体 */
.typestyle{
  width:80%;
  border-bottom:1px solid #CCC;
  padding-bottom:0.7rem;
}
/* 下边的字体 */
.ordstyle{
  font-size:0.75rem;
  padding-top:0.7rem;
}
/* 中间的价格 */
.numstyle{
  color:#FFD531;
  font:bolder 1.35rem 楷体;
}
/* 下方用户信息 */
.understyle{
  display:flex;
  align-items:center;
  padding:0 1rem;
}
/* 用户昵称 */
.namestyle{
  display:flex;
  margin-left:1rem;
  font:bolder 1.5rem 楷体;
}
/* 评分 */
.gradestyle,.scorestyle{
  display:flex;
  color:#FFD531;
  font:bold 0.8rem 楷体;
  margin-left: 0.25rem;
}
/* 下方的小图标 地址 距离*/
.addstyle{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left:2rem;
}
.locstyle{
  display:flex;
  font:bold 0.9rem 楷体;
  color:#6D6D6D;
}
.sitstyle{
  padding-right:2rem;
}
.gapstyle{
  padding-left:2rem;
}
</style>