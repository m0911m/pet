<template>
  <div>
    <heads></heads>
    <foster :homelist="homelist"></foster>
  </div>
</template>
<script>
// 引入head导航组件
import Head from "../components/Head.vue"
// 引入用户家庭组件
import Foster from "../components/Foster.vue"
export default {
  data(){
    return{
      homelist:[
        {
          h_img:"family0.jpg",
          u_img:"family_user0.jpg",
          num:35,
          u:"小福的家",
          score:"5.0",
          sit:"新科大厦",
          gaps:"0.3km"
        }
      ]
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