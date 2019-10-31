<template>
  <div>
    <div v-for="(item,i) of list" :key="i" class="container">
        <img :src="'http://127.0.0.1:5050/'+item.f_img" alt="">
        <div class="right">
            <div class="title">{{item.ftitle}}</div>
            <div class="price">价格:￥{{item.fprice}}</div>
        </div>
        <div class="btn">
            <van-button type="danger" size="small" :data-cid=item.cid @click="del">删除</van-button>
        </div>
    </div>
    
  <van-submit-bar
  :price="1"
  button-text="提交订单"
>
  <span slot="tip">
    如有需要，请尽快提交订单！ 
  </span>
</van-submit-bar>
  </div>
</template>
<style scoped>
img{
    width:30%;
    height: 8rem;
}
.container{
    display: flex;
    align-items:stretch;
    margin-top: 0.2rem;
    background-color: #e8e8e8;
}
.right{
    display: flex;
    flex-direction: column;
}
.price{
font-size: 1.1rem;
margin-left: 1.5rem;
font-style: bolder;
color: red;
margin-top: 40%;
}
.title{
font-size: 1.5rem;
font-weight: bolder;
margin-left: 1.3rem;
margin-top: 10%;
}
.btn{
    display: flex;
    align-items: center;
    margin-left: 20%;
}
</style>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  created() { 
   this.loadMore();
  },
  methods:{
    del(event){
      this.$messagebox.confirm("是否删除指定商品").then(res=>{
      var cid = event.target.dataset.cid;
      console.log(cid);
      //5:发送ajax请求
      var url = "foster/delcart";
      var obj = {cid};
      this.axios.get(url,{params:obj}).then(res=>{
       if(res.data.code==200){
          this.$toast("删除成功");
          this.loadMore();
       }  
      })
      }).catch(err=>{        
      })
    },
    loadMore(){
      var url = "foster/selectcart"
      this.axios.get(url).then(res=>{
        if(res.data.code==402){
          this.$messagebox("消息","请登录").then(res=>{
            this.$router.push("/Login");
          })
        }else{
          var list = res.data.data;
          this.list = list;
        }
      })
    }
  }
}
</script>