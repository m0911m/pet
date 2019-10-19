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
<<<<<<< HEAD
                    src='../../public/imgs/dog12.jpg'
=======
<<<<<<< HEAD
                    src="../../public/imgs/bg.jpg"
                    /> 
=======
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
>>>>>>> bb761be1a948925771b044243329600a9a86a3c8
                    />
>>>>>>> 0d20ada1de820549be58db4c0a3f08e461d203c1
                <div class="namemsg">
                    <p class="uname">{{item.uname}}</p>
                    <p class="ulocal">{{item.local}}</p>
                </div>
            </div>
            <!-- 文章内容 -->
            <p class="text">{{item.text}}</p>
            <!-- 文章图片 -->
            <div class="imgs">
<<<<<<< HEAD
                <div v-for="(pic,i) of item.pics" :key="i" class="imgbox">
                <img :src="require(`${pic}`)" alt="" class="img">
=======
                <div class="imgbox">
                <img :src="require('../../public/imgs/cat08.jpg')" alt="" class="img">
>>>>>>> bb761be1a948925771b044243329600a9a86a3c8
                </div>
            </div>
            <div class="about">
                <button>点赞  12</button>
                <button>评论</button>
            </div>    
        </div>
        <!-- 评论 -->
        <div>
<<<<<<< HEAD
            <div>
                <span>评论</span>
                <van-icon name="chat-o" />
            </div>
            <div class="usermsg down" v-for="(c,i) of comment" :key="i">
                <van-image round
                    width="3rem"
                    height="3rem"
                    src='../../public/imgs/dog12.jpg'
                    />
                <div class="namemsg">
                    <p class="uname">{{c.cname}}</p>
                    <p class="ulocal">{{c.ctext}}</p>
                </div>
            </div>
=======
            <!-- 输入框 -->
            <!-- 评论列表 -->
            <comment></comment>
            
>>>>>>> bb761be1a948925771b044243329600a9a86a3c8
        </div>
    </div>
</template>
<script>
import Comment from '../components/Comment.vue'
    export default {
        methods: {
            onClickLeft() {
            console.log('返回');
            }
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
                        ]
                    },                        
                ],
            }
        },
        // 注册子组件
        components:{
            "comment":Comment
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
</style>