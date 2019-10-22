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
                    src="../../public/imgs/bg.jpg"
                    /> 
                <div class="namemsg">
                    <p class="uname">{{item.uname}}</p>
                    <p class="ulocal">{{item.local}}</p>
                </div>
            </div>
            <!-- 文章内容 -->
            <p class="text">{{item.text}}</p>
            <!-- 文章图片 -->
            <div class="imgs">
                <div class="imgbox">
                <img :src="require('../../public/imgs/cat08.jpg')" alt="" class="img">
                </div>
            </div>
            <div class="make">
                <!-- 点赞 -->
                <div id="zan" @click="heart">
                    <img src="../../public/imgs/heart.png" alt="" class="heart" >
                    <img src="../../public/imgs/heart_red.png" alt="" class="heart_red">
                    <span class="like">{{item.heart}}</span> 
                </div>
                <!-- 评论 -->
                <inputmsg></inputmsg>
            </div>
            

        </div>
        <!-- 评论 -->
        <div>
            <!-- 输入框 -->
            <!-- 评论列表 -->
            <comment></comment>
            
        </div>
    </div>
</template>
<script>
import Comment from '../components/Comment.vue'
import Inputmsg from '../views/Inputmsg.vue'
    export default {
        methods: {
            onClickLeft() {
            this.$router.push("/Petcircle");
            },
            heart(){
                var heart = document.querySelector(".heart");
                var heart2 = document.querySelector(".heart_red");
                var like = document.querySelector(".like");
                heart.style.display="none";
                heart2.style.display="inline-block";
                like.innerHTML++;
            },
        },
        data(){
            return{
                list:[
                    {u_pic:'../../public/imgs/dog12.jpg',uname:"蜡笔小新",local:"北京北京市",text:"冬天来了，可以当枕头呀,小心今天取游乐园了，很开心很开心",pics:[
                        '../../public/imgs/cat01.png',
                        '../../public/imgs/cat08.jpg',
                        '../../public/imgs/dog03.jpg',
                        '../../public/imgs/dog04.jpg',
                        '../../public/imgs/dog05.jpg',
                        '../../public/imgs/dog09.jpg'
                        ],heart:1
                    },                        
                ],
            }
        },
        // 注册子组件
        components:{
            "comment":Comment,
            "inputmsg":Inputmsg
        }
}
</script>
<style scoped>
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
<<<<<<< HEAD
        /* width:15%; */
        display: inline;
=======
        width:15%;
        display: inline-block;
>>>>>>> f34d9b4c6ba89546e42e5a0d4f0b0c77ac1f2ac5
        
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