<template>
    <div>
        <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">宠圈</van-tabbar-item>
        <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                active:0
            }
        }
    }
</script>