<template>
    <div>
        <!-- 一条动态 -->
        <div class="story">
            <!-- 上面的图片 -->
            <img src="../assets/cat01.png" alt="" fit="contain" class="imgstory">
            <div class="user">
                <!-- 用户头像 -->
                <img src="../assets/cat08.jpg" alt="" class="imguser">
                
                <div>
                    <!-- 用户昵称 -->
                <span class="uname">丸子同学的总管</span>
                <p class="down">
                    <!-- 地址 -->
                <span class="local">江苏省苏州市</span>
                <!-- 点赞 -->
                <button>
                    <van-icon name="like-o" />
                </button>
                <span>12</span>
                </p>
                </div>
                
                
            </div>   
        </div>
    </div>
</template>
<style scoped>
    .story{
        width: 50%;
        height:250px;
        border:1px solid #f00;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .imgstory{
        width:100%;
    }
    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .imguser{
        width:50px;
        height:50px;
        border-radius: 50%;
    }
    .down{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .local{
        font-size:12px;
    }
    button{
        background:#fff;
        border:0;
    }
</style>