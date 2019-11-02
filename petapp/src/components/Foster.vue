<template>
<div>
  <div class="fosstyle" v-for="(item,i) of homelist" :key="i">
    <!-- 寄养家庭的组件 -->
    <!-- 上方的信息 -->
    <div class="userstyle">
      <!-- 家庭照片 -->
      <img class="famstyle" :src="'http://127.0.0.1:5050/'+homelist[i].f_img" alt="" @click="fosterhome" :data-fid="item.fid" >
      <!-- 用户头像 -->
      <img class="imgstyle" :src="'http://127.0.0.1:5050/'+homelist[i].f_uimg" alt="">
      <!-- 左边的价格 -->
      <div class="bgstyle">
        <span class="typestyle">寄养价格 <a class="monstyle" href="javascript:;">¥</a> 
        <span class="numstyle">{{homelist[i].fprice}}</span>起
        </span> 
        <span class="ordstyle">{{homelist[i].fisonbuy}}</span>
      </div>
    </div>
    <!-- 下方的信息 -->
    <!-- 用户昵称 评分 -->
    <div class="understyle">
      <!-- 小badge -->
      <mt-badge size="small" color="#353535">家庭</mt-badge>
      <!-- 昵称 -->
      <span class="namestyle">{{homelist[i].ftitle}}</span>
      <span class="gradestyle">评分<a href="" class="scorestyle">{{homelist[i].fscore}}</a></span>
    </div>
    <div class="addstyle">
      <span class="icon"><img :src="require('../../public/imgs/family_icon.png')" alt=""></span>
      <ul class="locstyle">
        <li class="sitstyle">{{homelist[i].faddress}}</li>|
        <li class="gapstyle">距我 {{homelist[i].fid}} km</li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    
    fosterhome(event){
    var fid=event.target.dataset.fid;
      this.$router.push(`/Fosterdetails/${fid}`)
    }
  },
  props:{
    homelist:{default:[]}
  }
}
</script>
<style scoped>
/* 寄养家庭组件 */
.fosstyle{
  box-sizing: border-box;
  border-radius:0.25rem; 
  padding:1rem;
}
.userstyle{
  position: relative;
  display:flex;
  padding:0 1rem;
}
/* 用户家庭图片 */
.famstyle{
  width:100%;
  height:13rem;
  border-radius: 1rem;
  padding-bottom:1rem;
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
  font:0.875rem 楷体;
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
.numstyle,.monstyle{
  color:#FFD531;
  font:bolder 1.35rem 楷体;
}
.monstyle{
  font-size:0.875rem;
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
  margin-left:0.5rem;
  font:bolder 1rem 楷体;
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
  margin-left:1rem;
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