<template>
  <div>
    <mt-header>
      <router-link :to="{path:'/Nav'}" slot="left" flxed>
        <mt-button class="btns">
        <van-icon name="arrow-left" class="iconstyle"></van-icon>
        </mt-button>
      </router-link>
      <mt-button class="btns"  slot="left" @click="county">
        <div class="coustyle">
          <p> 西 安 </p>
        </div> 
      </mt-button>
      <mt-button class="btns" slot="left">
        <div class="timestyle">选 择 寄 养 时 间</div>
      </mt-button>
      <mt-button class="btns" slot="left">
        <van-icon name="location-o" class="iconstyle"></van-icon>
      </mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    county(){
      console.log(111);
    }
  }
}
</script>
<style scoped>
.btns{
  margin-left:0.3rem;
}
.mint-header{
  background-color: #fff;
  color:#040404;
  padding:0;
  margin-top:0.25rem;
  box-sizing: border-box;
}

.coustyle{
  width:4.5rem;
  padding:0 0.5rem;
}
.coustyle>p{
  text-overflow: ellipsis;/*文本溢出显示省略符号*/
  overflow: hidden;
}
.timestyle{
  padding:0 1.8rem;
}
.iconstyle{
  height:50%;
  padding:0 1rem;
  font-size:1rem;
}
.mint-header .mint-button{
  background-color:#f2f2f2;
}
</style>

 
