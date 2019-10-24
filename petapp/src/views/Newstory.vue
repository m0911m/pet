<template>
    <div class="newstory">
        <!-- 一条动态 -->
        <div class="story" v-for="(item,i) of lists" :key="i" >
            <!-- 上面的图片 -->
            <van-image class="storypic"
                fit="fill"
                radius="20px"
                :src="require(`../../public/imgs/${item.pic}`)" @click="detail"/>
            <div class="user">
                <!--左侧 用户头像 -->
                <img :src="require(`../../public/imgs/${item.u_pic}`)" alt="" class="imguser">
                <!-- 右侧 用户名称 -->
                <div class="usertxt">
                    <!-- 用户昵称 -->
                    <span class="uname">{{item.uname}}</span>
                    <div class="down">
                        <!-- 地址 -->
                        <span class="local">{{item.local}}</span>
                        <!-- 点赞 -->
                        <div id="zan" @click="heart">
                            <img src="../../public/imgs/heart.png" alt="" class="heart" >
                            <img src="../../public/imgs/heart_red.png" alt="" class="heart_red">
                            <span class="like">{{item.count}}</span> 
                        </div> 
                    </div>   
                </div> 
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[
                {pic:"cat01.png",u_pic:"dog03.jpg",uname:"带疾跑的小鲁班",local:"四川省成都市",count:1},
                {pic:"cat08.jpg",u_pic:"dog04.jpg",uname:"索菲亚",local:"陕西省西安市",count:2},
                {pic:"cat20.jpeg",u_pic:"dog05.jpg",uname:"小麋鹿ROY",local:"浙江省杭州市",count:4},
                {pic:"cat21.jpeg",u_pic:"dog09.jpg",uname:"园长大人编辑队",local:"可能来自火星",count:19},
                {pic:"cat01.png",u_pic:"dog12.jpg",uname:"萌宠i",local:"上海上海市",count:31},
                {pic:"cat01.png",u_pic:"dog11.jpg",uname:"噜噜要抱抱",local:"江苏省南京市",count:19},
                {pic:"cat01.png",u_pic:"dog24.jpg",uname:"小猫米",local:"湖北省武汉市",count:51},
            ]
        }
    },
    methods: {
        heart(){
            var heart = document.querySelector(".heart");
            var heart2 = document.querySelector(".heart_red");
            var like = document.querySelector(".like");
            heart.style.display="none";
            heart2.style.display="inline-block";
            like.innerHTML++;
        },
        detail(){
            this.$router.push("/Detailstory");
        },
    }
}
</script>
<style scoped>
   .newstory{
        display: flex;
        flex-wrap: wrap; 
        justify-content: space-between;
        align-items: center;      
    } 
    .story{
        width: 50%;
        margin:2px 0;
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;
        align-items: center;
    }
    .storypic{
        width:95%;
        height:180px;
    }
    .user{
        width:95%;
        margin-left:0;
    }
    .imguser{
        width:20%;
        height:40px;
        border-radius: 50%;
        margin-left:0;
    }
    .usertxt{
        display: inline-block;
        width:80%;
        padding-left:5px;
        box-sizing: border-box;
    }
    .uname{
        font-size: 12px;
        color:#000;
    }
    .down{
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom:5px;
    }
    .local{
        font-size:10px;
        color:#aaa;
    }
    #zan{
        display: inline;
    }
    .heart{width:20px;height:20px;display: inline-block;}
    .heart_red{
        width:20px;
        height:20px;
        display:none;
    }
    .like{margin-left:5px;}
</style>