<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar title="添加动态" left-text="返回" right-text="发布" left-arrow @click-left="onClickLeft" @click-right="onClickRight"
            />

        <!-- 输入文本 -->
        <van-cell-group>
            <van-field v-model="title" placeholder="标题"/>
            <van-field v-model="subtitle" placeholder="副标题" style="font-size:12px"/>
            <van-field v-model="article" placeholder="讲述我和它们的故事......"/>
        </van-cell-group>

        <!-- 上传文件 -->
        <van-uploader  v-model="fileList" multiple :max-count="6"/>
        <!-- :max-count="6"  最多可上传6张图片 -->

        <!-- 所在位置 -->
        <div class="localtion" onclick="position">
            <div>
                <van-icon name="location-o" class="iconStyle"/>
                <span class="local">所在位置</span>
            </div>
            <van-icon name="arrow" />
        </div>    
    </div>
</template>
<script>
    export default {  
        data(){
            return {
                title:"",
                subtitle:"",
                article:"",
                fileList:[],
            }
        },
        methods: {
            onClickLeft() {
            console.log("返回");
            },
            onClickRight() {
            console.log("发布");
            // 点击发布，将动态存到数据库, 标题，副标题，文章，图片
            // console.log(this.title);
            // console.log(this.subtitle);
            // console.log(this.article);
            // console.log(this.fileList);
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
        display:flex;
        justify-content: space-between
    }
    .iconStyle{
        margin-left:10px;
        margin-right:10px;
    }
    
</style>