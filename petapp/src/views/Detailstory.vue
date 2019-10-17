<template>
    <div class="box">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="动态详情" left-arrow @click-left="onClickLeft" />
        <!-- 动态详情 -->
        <div v-for="(item,i) of list" :key="i">
            <!-- 用户名 -->
            <div class="usermsg">
                <!-- <van-image round
                    width="3rem"
                    height="3rem"
                    :src="require('../../public/imgs/bg.jpg')"
                    /> -->
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
                <!-- <img :src="require('../../public/imgs/cat08.jpg')" alt="" class="img"> -->
                </div>
            </div>
            <div class="about">
                <button>点赞</button>
                <button>评论</button>
            </div>    
        </div>
        <!-- 评论 -->
        <div>
            <div>
                <span>评论</span>
                <van-icon name="chat-o" />
            </div>
            <div class="usermsg down" v-for="(c,i) of comment" :key="i">
                <van-image round
                    width="3rem"
                    height="3rem"
                    :src="require('../../public/imgs/bg.jpg')"/>
                <div class="namemsg">
                    <p class="uname">{{c.cname}}</p>
                    <p class="ulocal">{{c.ctext}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            onClickLeft() {
            console.log('返回');
            }
        },
        data(){
            return{
                list:[
                    {uname:"蜡笔小新",local:"北京北京市",text:"冬天来了，可以当枕头呀,小心今天取游乐园了，很开心很开心",},                        
                ],
                comment:[
                    {cname:"麒麟",ctext:"爱心满满"},
                    {cname:"郁闷的火柴",ctext:"可爱"},

                ]
            }
        },
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
        background:pink;
        border: 0;
        margin-right: 10px;
        border-radius: 20px;
        padding: 5px 10px;
    }
    .about{
        display: flex;
        justify-content: end;
        padding: 10px;
        box-sizing: border-box;
    }
    .usermsg.down{
        border-bottom:1px solid #ccc;
        }
</style>