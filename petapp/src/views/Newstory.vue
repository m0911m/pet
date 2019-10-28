<template>
    <div class="newstory">
        <!-- 一条动态 -->
        <div class="story" v-for="(item,i) of lists" :key="i" >
            <!-- 上面的图片 -->
            <van-image class="storypic"
                fit="fill"
                radius="20px"
                :src="require('../../public/imgs/'+item.t_img)" @click="detail(item.tid)"/>
            <div class="user">
                <!--左侧 用户头像 -->
                <img :src="require('../../public/imgs/'+item.t_img)" alt="" class="imguser">
                <!-- 右侧 用户名称 -->
                <div class="usertxt">
                    <!-- 用户昵称 -->
                    <span class="uname">{{item.tuname}}</span>
                    <div class="down">
                        <!-- 地址 -->
                        <span class="local">{{item.taddress}}</span>
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
            lists:[]
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
        detail(id){
            
            
            // console.log(id);
            this.$router.push(`/Detailstory/${id}`);
        },
        loadMore(){
            var url="news/messagelist"
            this.axios.get(url).then(res=>{
                // console.log(res.data.data);
                this.lists=res.data.data;  
            })
        }
    },
    created() {
        this.loadMore();
    },
}
</script>
<style scoped>
   .newstory{
        display: flex;
        flex-wrap: wrap; 
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;     
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