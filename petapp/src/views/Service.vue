<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="客服消息" left-arrow @click-right="onClickRight" @click-left="onClickLeft">
      <van-icon name="phone-circle-o" slot="right" size="25px" />
    </van-nav-bar>
    <!-- 中间的聊天区域 -->
    <div class="chat">
      1111111111111111
    </div>
    <!-- 底部输入框 -->
    <div class="downfixed">
      <!-- 输入框 -->
      <div class="down">
        <input type="text" placeholder="输入新消息..." class="inputmsg">
        <van-icon name="smile-o" size="25px"/>
        <van-icon name="add-o" size="25px"/>
      </div>
      <!-- 选择弹出框 -->
      <div class="grid">
        <van-grid>
          <van-grid-item icon="photo-o" text="图片" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    onClickRight(){
      this.$dialog.confirm({
        title: '温馨提示',
        message: '拨打客服热线：000-100-000'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
    onClickLeft(){
      this.$router.push('/Message')
    },
  }
}
</script>
<style scoped>
.container{
  position: relative;
}
.downfixed{
  display: absolute;
  bottom:0;
}
.chat{
  width:100%;
  height:672px;
}
.down{
  height:30px;
  width:100%;
  padding:10px;
  border-top:1px solid #ccc;
  
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.inputmsg{
  border-radius: 5px;
  padding:3px;
  outline: 0;
  border:1px solid #ccc;
  width:70%;
}
.grid{
  width:100%;
  display:none;
}
</style>