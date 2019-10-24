<template>
  <div>
    <heads></heads>
    <foster></foster>
  </div>
</template>
<script>
// 引入head导航组件
import Head from "../components/Head.vue"
// 引入用户家庭组件
import Foster from "../components/Foster"
export default {
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    "heads":Head,
    "foster":Foster
  }
}
</script>
<style scoped>

</style>