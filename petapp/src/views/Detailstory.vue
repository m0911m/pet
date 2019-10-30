<template>
    <div class="box">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="动态详情" left-arrow @click-left="onClickLeft" />
        <!-- 动态详情 -->
        <div v-for="(item,i) of list" :key="i">
            <!-- 用户名 -->
            <div class="usermsg">
                <van-image round
                    width="3rem"
                    height="3rem"
                    :src="'http://127.0.0.1:5050/'+item.t_img"
                    /> 
                <div class="namemsg">
                    <p class="uname">{{item.tuname}}</p>
                    <p class="ulocal">{{item.taddress}}</p>
                </div>
            </div>
            <!-- 文章内容 -->
            <p class="text">{{item.ttxt}}</p>
            <!-- 文章图片 -->
            <div class="imgs">
                <div class="imgbox">
                <img :src="'http://127.0.0.1:5050/'+item.t_img" alt="" class="img">
                </div>
            </div>
        </div>
        <!-- 评论 -->
        <div>
            <!-- 输入框 -->
            <div class="inputbox">
                <input type="text" class="txt" placeholder="说点什么..." v-model="msg">
                <button class="send" @click="send">发送</button>
            </div>
            <!-- 评论列表 -->
            <comment :tid=this.id></comment> 
        </div>
    </div>
</template>
<script>
import Comment from '../components/Comment.vue'
import Inputmsg from '../views/Inputmsg.vue'
    export default {
        props:["id"],
        data(){
            return{
                list:[],
                msg:""
            }
        },
        methods: {
            onClickLeft() {
            this.$router.push("/Petcircle");
            },
            
            loadMore(){
                var tid=parseInt(this.id);
                var obj={tid:tid};
                var url="news/detailstory"
                this.axios.get(url,{params:obj}).then(res=>{
                    // console.log(res.data.data);  
                    this.list=res.data.data;
                })
            },
            send(){
                console.log(this.msg)
            }
            
        },
        // 注册子组件
        components:{
            "comment":Comment,
        },
        created() {
            this.loadMore();
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
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        
    }
    .imgbox{
        width:30%;
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
    #zan{
        width:15%;
        display: inline-block;
        
    }
    .heart{width:20px;height:20px;display: inline-block;}
    .heart_red{
        width:20px;
        height:20px;
        display:none;
    }
    .like{margin-left:5px;}
    .make{
        display: flex;
    }
</style>