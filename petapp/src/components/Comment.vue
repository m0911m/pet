<template>
  <div class="contain">
    <!-- 顶部 -->
    <div class="top">
      <span class="col">| </span>
      <span>评论</span>
    </div>
    <!-- 评论列表 -->
    <div  v-for="(c,i) of clists" :key="i" class="comment"> 
      <!-- 评论者头像 -->
      <div class="cimg">
        <van-image round width="60" height="60" :src="'http://127.0.0.1:5050/'+c.vicon"/>
      </div>
      <div class="ctxt">
          <!-- 用户名 -->
          <p class="cname">{{c.uname}}</p>
          <span></span>
          <!-- 评论内容 -->
          <p class="ctext">{{c.vcotnet}}</p>
      </div>
    </div>
    <!-- 若无评论，显示内容 -->
    <div id="ready" v-show="this.clists.length<1">
      <div class="res">
        <img src="../../public/imgs/cry.png" alt="">
        <p>还没有人评论呢~</p>
      </div>    
    </div>  
  </div>
</template>
<script>
  export default{
    data(){
      return{
        clists:[] ,  //评论列表
      }
    },
    props:{
      tid:0,
    },
    methods:{
      loadMore(ready){
        // 1.获取动态id
        var tid=parseInt(this.tid);
        var obj={tid};
        // 2.发送请求，根据动态id查找相应评论
        var url="news/viewsdetail"
        this.axios.get(url,{params:obj}).then(res=>{
          if(res.data.code==200){
            this.clists=res.data.data;
          }else if(res.data.code==401){
            this.clists=[];
          }
        })
      }
    },
    created(){
      this.loadMore();
    },
  }
</script>
<style>
  .res{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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