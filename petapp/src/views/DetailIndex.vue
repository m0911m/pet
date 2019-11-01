<template>
  <div>
    <div class="box">
      <!-- 顶部导航栏 -->
        <van-nav-bar title="故事详情" left-arrow @click-left="onClickLeft" />
        <!-- 动态详情 -->
        <div v-for="(item,i) of list" :key="i">
            <!-- 用户名 -->
            <div class="usermsg">
                <van-image round
                    width="3rem"
                    height="3rem"
                    :src="'http://127.0.0.1:5050/'+item.i_icon"
                    /> 
                <div class="namemsg">
                    <p class="uname">{{item.iuname}}</p>
                    <p class="ulocal">{{item.itime}}</p>
                </div>
            </div>
            <!-- 文章标题 -->
            <div class="title">
              <h4>{{item.ititle}}</h4>
              <h5>{{item.ismtitle}}</h5>
            </div>
            <!-- 文章图片 -->
            <div class="imgs">
                <div class="imgbox">
                <img :src="'http://127.0.0.1:5050/'+item.i_img" alt="" class="img">
                </div>
            </div>
            <!-- 文章内容 -->
            <p class="text">{{item.itxt}}</p>
            
        </div>
        <!-- 评论 -->
        <div>
            <!-- 输入框 -->
            <div class="inputbox">
                <input type="text" class="txt" placeholder="说点什么..." v-model="msg">
                <button class="send" @click="send">发送</button>
            </div>
            <!-- 评论列表 -->
            <comment :tid=this.iid></comment> 
        </div> 
    </div>
  </div>
</template>
<script>
import comment from "../components/Comment.vue"
  export default{
    data(){
      return{
        list:[],
        msg:""
      }
    },
    props:["iid"],
    components:{
      "comment":comment
    },
    methods: {
      loadMore(){
        var iid=this.iid;
        var url="news/detailindex";
        var obj={iid};
        this.axios.get(url,{params:obj}).then(res=>{
          // console.log(res);  
          this.list=res.data.data;
        })
      },
      onClickLeft() {
        this.$router.push("/Nav");
      },
      send(){}
    },
    created() {
      this.loadMore()
    },
  }
</script>
<style scoped>
  .inputbox{
        margin-bottom: 10px;
    }
    .txt{
    width:80%;
    border:1px solid #ccc;
    border-radius: 3px;
    box-shadow:0 0 1px #ccc;
    outline: 0;
    margin-top:10px;
    margin-left:10px;
    padding:5px;
    font-size:12px;
  }
  .send{
    background: #f7bf25;
    border-radius: 3px;
    border:0;
    font-size: 12px;
    color:#fff;
    padding:5px;
  }
    .usermsg{
        display:flex; 
        justify-content: left;
        flex-wrap: nowrap;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
    }
    p{margin:0;padding:0}
    .text{text-align: left;margin-left:10px;}
    .namemsg{margin-left:20px;}
    .uname{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .ulocal{
        font-size: 12px;
        margin-bottom: 5px;
    }
    .imgs{
        width:100%;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .imgbox{
        width:100%;
        padding:5px;
    }
    .img{
        width:100%;
    }
    button{
        background:#f7bf25;
        border: 0;
        margin-right: 10px;
        border-radius: 20px;
        padding: 5px 10px;
    }
    .about{
        display: flex;
        padding: 10px;
        box-sizing: border-box;
    }
    
    .content{
        border-radius: 5px;
        margin-left:20px;
    }
    .send{
        border-radius: 0;
        padding:3px;
        background:#f7bf25;
        margin-left:5px;
    }
    .title{
      text-align: center;
    }
    h4,h5{
      margin:10px auto;
      color:#333;
    }
</style>