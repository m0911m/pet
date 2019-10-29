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
      this.axios.get("user/selectpetmessage").then(res=>{
        console.log(res.session);
      })
    }
  }
}
</script>