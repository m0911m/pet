<template>
    <div>
        <navbar></navbar>
        <!-- 头部 -->
        <van-nav-bar title="添加动态" right-text="发布" @click-right="onClickRight"
            />

        <!-- 输入文本 -->
        <van-cell-group>
            <van-field v-model="title" placeholder="标题"/>
            <van-field v-model="subtitle" placeholder="副标题" style="font-size:12px"/>
            <van-field v-model="article" placeholder="讲述我和它们的故事......"/>
        </van-cell-group>

        <!-- 上传图片 -->
        <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="6"/>
        <!-- :max-count="6"  最多可上传6张图片 -->

        <!-- 所在位置 -->
        <div class="localtion">
            <div>
                <van-icon name="location-o" class="iconStyle"/>
                <button class="local" @click="position">所在位置</button>|
                <span class="tex">可能来自火星</span>
            </div>
            
        </div>    
    </div>
</template>
<script>
import Navbar from "../components/Navbar"
    export default {  
        components:{
            "navbar":Navbar
        },
        data(){
            return {
                title:"",
                subtitle:"",
                article:"",
                fileList:[],
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            } ,
            
            onClickRight() {
                // var url="user/updatamessagelist"
                // this.axios.post(url).then(res=>{
                // console.log(res);  
                // if(res.data.code<=0){
                //     this.$toast("请登录");
                //     this.$router.push("/Login")
                // }
                // })
            },
            position(){
                console.log("定位");
            },                   
        },        
}
</script>
<style scoped>
    .localtion{
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        padding-top:10px;
        padding-bottom:10px;
        font-size:14px;
    }
    .iconStyle{
        margin-left:10px;
        margin-right:5px;
    }
    .local{
        background: #fff;
        border:0;
        color:#666;

    }
</style>