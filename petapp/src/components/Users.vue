<template>
  <div>
    <!-- 上面的背景图和图片上的内容 -->
    <div class="bgstyle">
      <ul class="markstyle">
        <li></li>
        <li>养宠记录册</li>
      </ul>
      <!-- 标题 -->
      <p class="titlestyle">没有猫的旅行都是徒劳</p> 
      <img class="imgstyle" src="../../public/imgs/user_0.jpg" alt="">     
    </div>
    <!-- 下方的字段 -->
    <div class="textstyle">
      <!-- 小标题 -->
      <span class="subtitle">#带着猫咪去旅行#</span>
      <!-- 用户的昵称 -->
      <span class="userstyle">猫窝猫咪幼儿园</span>
      <!-- 段落 -->
      <p class="paragstyle">哪有什么适带猫去的旅行的地方,只要你带他去了，所有的地方都适合，只要你肯踏上这旅程。</p>
    </div>
    <!-- 点赞评论 -->
    <div class="numstyle">
      <span class="diststyle">评论 25</span>
      <span>点赞 84</span>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
/* 背景 */
.bgstyle{
  position: relative;
  width:100%;
  height:200px;
  background:url('../../public/imgs/0.jpg') no-repeat;
  background-size:cover;
}
/* 养宠记录册 */
.markstyle{
  position:absolute;
  left: 1rem;
  top: 1rem;
  display:flex;
  padding:0.25rem 1rem;
  background-color: rgba(234,236,233,0.8);
  font:bold 0.9rem "华文楷体";
}
/* 标题 */
.titlestyle{
  position: absolute;
  bottom:0rem;
  width:100%;
  padding:0.875rem;
  margin: 0;
  background-color:rgba(217,221,225,0.8);
  font:bold 1.05rem "楷体";
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