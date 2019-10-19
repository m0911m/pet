<template>
  <div>
    <!-- 用户发布故事组件 -->
    <div class="dynstyle" v-for="(item,i) of userlist" :key ="i">
      <!-- 上面的图片和图片上的内容 -->
      <div class="bgstyle">
         <img class="bgstyle" :src="require('../../public/imgs/'+userlist[i].bg_img)" alt="">
        <p class="markstyle">养宠记录册</p>
        <!-- 标题 -->
        <p class="titlestyle">{{userlist[i].title}}</p> 
        <img class="imgstyle" :src="require('../../public/imgs/'+userlist[i].img)" alt="">     
      </div>
      <!-- 下方的字段 -->
      <div class="textstyle">
        <!-- 小标题 -->
        <span class="subtitle">{{userlist[i].subtitle}}</span>
        <!-- 用户的昵称 -->
        <span class="userstyle">{{userlist[i].user}}</span>
        <!-- 段落 -->
        <p class="paragstyle">{{userlist[i].parag}}</p>
      </div>
      <!-- 点赞评论 -->
      <div class="numstyle">
        <span class="diststyle">{{userlist[i].num1}}</span>
        <span>{{userlist[i].num2}}</span>
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
  props:{
    userlist:{default:[]}
  }
}
</script>
<style scoped>
.dynstyle{
  margin:1rem 0; 
  box-sizing: border-box;
}
/* 背景 */
.bgstyle{
  position: relative;
  width:100%;
  height:200px;
  background-size:cover;
}
/* 养宠记录册 */
.markstyle{
  position:absolute;
  left: 1rem;
  top: 1rem;
  display:flex;
  margin:0;
  padding:0.25rem 1rem;
  background-color: rgba(234,236,233,0.8);
  font:bold 0.9rem "华文楷体";
}
/* 标题 */
.titlestyle{
  position: absolute;
  box-sizing: border-box;
  bottom:0rem;
  width:100%;
  padding:0.875rem 1rem;
  margin: 0;
  background-color:rgba(217,221,225,0.8);
  font:bold 1.1rem "楷体";
}
/* 用户头像 */
.imgstyle{
  width:2.3rem;
  border-radius: 50%;
  position:absolute;
  right:1rem;
  bottom:-1.15rem;
}
/* 下方的字段 */
.textstyle{
  position:relative;
  margin-top:0.25rem;
  padding:0 1rem;
}
/* 小标题 */
.subtitle{
  font:1rem 楷体;
}
/* 用户昵称 */
.userstyle{
  position:absolute;
  right:4rem;
  font:bolder 1rem 楷体;
}
/* 段落 */
.paragstyle{
  font:0.8rem 楷体;
}
/* 点赞,评论 */
.numstyle{
  position: absolute;
  right:1rem;
  color:#c7c7c7;
  font:0.6rem 楷体;
}
/* 评论 */
.diststyle{
  margin-right:1rem;
}
</style>