<template>
  <div class="contain">
    <!-- 顶部 -->
    <div class="top">
      <span class="col">| </span>
      <span>评论</span>
    </div>
    <!-- 评论列表 -->
    <div  v-for="(c,i) of clist" :key="i" class="comment"> 
      <!-- 评论者头像 -->
      <van-image round width="65" height="65" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      <div class="ctxt">
          <!-- 用户名 -->
          <p class="cname">{{c.cname}}</p>
          <span></span>
          <!-- 评论内容 -->
          <p class="ctext">{{c.ctext}}</p>
      </div>
    </div>
     
  </div>
</template>
<script>
  export default{
    data(){
      return{
        clist:[
          {pic:"../../public/imgs/cat01.png",cname:"茶小乖",ctext:"睡得真香"},
          {pic:"../../public/imgs/cat01.png",cname:"麒麟",ctext:"爱心满满"},
          {pic:"../../public/imgs/cat01.png",cname:"郁闷的火柴",ctext:"可爱"},
        ]
      }
    }
  }
</script>
<style>
  .contain{
    background: #eee;
  }
  .comment{
    display:flex;
    background: #fff;
  }
  .ctxt{
    width:100%;
    margin-left:5px;
    text-align: left;
    border-bottom:1px solid #ccc;
  }
  .cname{
    color:#f7bf25;
    margin-top:5px;
    margin-bottom: 0;
  }
  .ctext{
    color:#555;
    margin-top:5px;
    margin-bottom: 5px;
  }
  .top{
    text-align: left;
    margin-left:5px;
    padding-top:5px;
    padding-bottom: 5px;
  }
  .col{
    color:#f7bf25;
    }
</style>