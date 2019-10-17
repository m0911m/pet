<template>
  <div>
    <!-- tabbar组件 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="homepage">
        <img slot="icon" src="../assets/logo.png">
        {{msg[0]}}
      </mt-tab-item>
      <mt-tab-item id="pet">
        <img slot="icon" src="../assets/logo.png">
        {{msg[1]}}
      </mt-tab-item>
      <mt-tab-item id="message">
        <img slot="icon" src="../assets/logo.png">
        {{msg[2]}}
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/logo.png">
        {{msg[3]}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:"",
      msg:["首页","宠圈","消息","我的"]
    }
  },
  methods: {
    
  }
}
</script>