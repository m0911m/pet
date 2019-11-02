<template>
    <div>
        <navbar></navbar>
        <!-- 头部 -->
        <van-nav-bar title="添加动态"  right-text="发布" @click-right="onClickRight"/>
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
            <label @click="map">
                <van-icon name="location-o" class="iconStyle"/>
                <span class="local">所在位置</span>
            </label>
            <van-icon name="arrow" />
        </div> 
        <!-- <map></map>    -->
    </div>
</template>
<script>
import qs from "qs"
// 引入底部导航栏
import Navbar from "../components/Navbar"
// import Map from './map'
    export default {  
        data(){
            return {
                title:"",
                subtitle:"",
                article:"",
                fileList:[],
                location:""
            }
        },
        components:{
            "navbar":Navbar,
            // "map":Map
        },
        methods: {
            map(){
                this.$router.push("/Map");
            }, 
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                // let content = file.file;
                // let data = new FormData();
                // data.append('img',content);
                // this.axios.post('图片上传地址',data)
                // .then((res) => {
                //     let datas = res.data.datas.path;
                //     this.msg.fileList.push(`api地址${datas}`);
                // })
            } ,
            onClickRight(file) {
                // console.log(file.file);
                var ttitle=this.title;
                var tsmtitle=this.subtitle;
                var ttxt=this.article;
                var t_img='cat08.jpg';
                if(ttxt==""){
                    this.$toast("内容不能为空");
                    return;
                }
                var obj={ttitle,tsmtitle,ttxt,t_img}
                var url="news/updatamessagelist"
                this.axios.post(url,qs.stringify(obj)).then(res=>{
                // console.log(res); 
                this.$toast("发布成功!")
                if(res.data.code==402){
                    this.$toast("请登录");
                    this.$router.push("/Login")
                }
            })
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
        display:flex;
        justify-content: space-between
    }
    .iconStyle{
        margin-left:10px;
        margin-right:10px;
    }
    
</style>