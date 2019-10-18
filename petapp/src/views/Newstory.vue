<template>
    <div class="newstory">
        <!-- 一条动态 -->
        <div class="story" v-for="(item,i) of lists" :key="i">
            <!-- 上面的图片 -->
            <van-image
                width="10rem"
                height="10rem"
                fit="fill"
                radius="20px"
                :src="require(`../../public/imgs/${item.pic}`)"/>
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
                        <div id="zan">
                            <img src="../../public/imgs/heart.png" alt="" class="heart">
                            <img src="../../public/imgs/heart_red.png" alt="" class="heart_red">
                            <span>{{item.count}}</span> 
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
        Addheart(){
            // 点击后，切换图片，数值加1
            // var heart = document.getElementById("heart");
            // var heart_red = document.getElementById("heart_red");
            // heart.style.display="none";
            // heart_red.style.display="block";
            console.log(111)
        }
    },
}
</script>
<style scoped>
   .newstory{
        display: flex;
        flex-wrap: wrap;       
    } 
    .story{
        width: 50%;
        margin:5px 0;
    }
    
    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left:0;
    }
    .imguser{
        width:40px;
        height:40px;
        border-radius: 50%;
        margin-left:0;
    }
    .uname{font-size: 12px;color:#000}

    .down{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:5px;
    }
    .local{
        font-size:10px;
        color:#aaa;
    }
    button{
        background:#fff;
        border:0;
    }
    .heart{width:20px;height:20px}
    .heart_red{display:none}
</style>