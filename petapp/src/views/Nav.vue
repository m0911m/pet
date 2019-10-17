<template>
  <div>
    <ul class="jumpstyle">
      <li class="listyle">Hi 想让他住哪里</li>
      <li><input class="inputstyle" disabled placeholder="找附近的寄样家庭" type="text"></li>
    </ul>
    <ul>
      <li>
        <a href="">申请家庭</a>
        <img src="" alt="">
      </li>
      <li>
        <a href="">宠物指南</a>
      </li>
      <li>
        <a href="">保障服务</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{

  }  
}
</script>
<style scoped>
.jumpstyle{
  display:flex;
  justify-content: center;
  align-items: center;
  padding:1rem 0 1rem 1rem;
  background:#f7bf25;
  display:flex;
  align-items: center;
}
.listyle{
  font:18px  "隶书";
}
.inputstyle{
  display:flex;
  text-align:center;
  margin-left:1rem;
  height:1.5rem;
  width:8rem;
  border:0;
  border-radius: 16px;
  font-size:12px;
  padding:0.25rem;
}
</style>