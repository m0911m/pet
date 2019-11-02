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
import qs from "qs"
export default {
  data(){
    return{
      homelist:[],
    }
  },
  props:["faddress"],
  created(){
   this.home();
   this.details();
  },
methods:{
  home(){
      var url="foster/fosterlist";
      this.axios.get(url).then(res=>{
        this.homelist=res.data.data;
      })
    },
  details(){
    var faddress=this.faddress;
    var obj={faddress};
    var url="foster/searchhome";
    // console.log(obj);
    this.axios.post(url,qs.stringify(obj)).then(res=>{
      // console.log(res);
      this.homelist=res.data.data;
    })
  }
},
  beforeRouteEnter (to, from, next) {
    if(from.name==="Fosterdetails"){
      to.meta.keepAlive=true;    
    }else{
      to.meta.keepAlive=false;
    }
    next();
  },
  components:{
    "heads":Head,
    "foster":Foster
  }
}
</script>
<style scoped>

</style>