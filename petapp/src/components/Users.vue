<template>
  <div>
    <!-- 用户发布故事组件 -->
    <div class="dynstyle" v-for="(item,i) of userlist" :key ="i" @click="detail(item.iid)">
      <!-- 上面的图片和图片上的内容 -->
      <div class="upstyle">
         <img class="bgstyle" :src="'http://127.0.0.1:5050/'+userlist[i].i_img" alt="">
        <p class="markstyle">养宠记录册</p>
        <!-- 标题 -->
        <p class="titlestyle">{{userlist[i].ititle}}</p> 
        <img class="imgstyle" :src="'http://127.0.0.1:5050/'+userlist[i].i_icon" alt="">     
      </div> 
      <!-- 下方的字段 -->
      <div class="textstyle">
        <!-- 小标题 -->
        <span class="subtitle">{{userlist[i].ismtitle}}</span>
        <!-- 用户的昵称 -->
        <span class="userstyle">{{userlist[i].iuname}}</span>
        <!-- 段落 -->
        <p class="paragstyle">{{userlist[i].itxt}}</p>
      </div>
      <!-- 点赞评论 -->
      <div class="numstyle">
        <span class="diststyle">评论 {{userlist[i].iid}}</span>
        <span>点赞 {{userlist[i].uid}}</span>
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
  },
  methods: {
    detail(iid){
      // console.log(iid)
      this.$router.push(`/DetailIndex/${iid}`)
    }
  },
}
</script>
<style scoped>
.dynstyle{
  box-sizing: border-box;
  margin:1rem 0;
  padding:0 1rem 1rem;
}
/* 上方div */
.upstyle{
  position: relative;
  width:100%;
}
/* 背景 */
.bgstyle{
  position: relative;
  width:100%;
  height:12.5rem;
  border-radius: 1rem;
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
}
/* 小标题 */
.subtitle{
  font:bold 0.05rem 楷体;
  color:#d6d6d6;
}
/* 用户昵称 */
.userstyle{
  position:absolute;
  right:3.5rem;
  font:bolder 1rem 楷体;
}
/* 段落 */
.paragstyle{
  font:0.8rem 楷体;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
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