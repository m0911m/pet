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
      <div class="cimg">
        <van-image round width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </div>
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
        ],
        clists:[] ,  //评论列表
        tid:1
      }
    },
    methods:{
      loadMore(){
        // 1.获取动态id
        var tid=this.tid;
        // 2.发送请求，根据动态id查找相应评论
        var obj={tid}
        var url="news/viewsdetail"
        this.axios.get(url,obj).then(res=>{
          console.log(res);  
        })
      }
    },
    created(){
      this.loadMore();
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
  .cimg{
    display: inline-block;
    padding:5px;
    box-sizing: border-box;
  }
</style>