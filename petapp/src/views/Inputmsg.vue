<template>
  <div>
    <van-icon name="chat-o" @click="showPopup"/>
    <span>3</span>
    <van-popup v-model="show" position="bottom" :style="{height:'10%'}">
      <input type="text" class="txt" placeholder="说点什么...">
      <button class="send">发送</button>
    </van-popup>

  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
  .txt{
    width:60%;
    border:1px solid #ccc;
    border-radius: 3px;
    box-shadow:0 0 1px #ccc;
    outline: 0;
    margin-top:10px;
    margin-left:10px;
    padding:5px;
    font-size:12px;
  }
  .send{
    background: #f7bf25;
    border-radius: 3px;
    border:0;
    font-size: 12px;
    color:#fff;
    padding:5px;
  }
</style>