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
      homelist:[]
    }
  },
  created(){
   this.home();
  },
  methods:{
  home(){
      var url="foster/fosterlist";
      this.axios.get(url).then(res=>{
        console.log(res.data.data);
        this.homelist=res.data.data;
      })
    }
  },
  components:{
    "heads":Head,
    "foster":Foster
  }
}
</script>
<style scoped>

</style>