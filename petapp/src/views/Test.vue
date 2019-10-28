<template>
  <div>
    <h1>测试</h1>
    <button @click="change">查询</button>
  </div>
</template>
<script>
export default {  
  methods:{
    change(){
      this.axios.get("/user/selectpetmessage",{
      params:
      {}
      }).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>