<template>
  <div class="goods">
    <div class="head">
      <van-button class="back" @click="back">
        <van-icon name="arrow-left" />
      </van-button>
    </div>
    <div v-for="(item,i) of list" :key="i">
    <van-swipe>
      <van-swipe-item>
        <img :src="'http://127.0.0.1:5050/'+item.f_img"  class="lunbo">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell >
        <div class="group">
          <div class="right1" >
            <img :src="'http://127.0.0.1:5050/'+item.f_uimg" alt="" class="leftimg"> 
          
            <div class="right">
              <div class="title">{{item.ftitle}}</div>
              <span class="score">评分:{{item.fscore}}</span>
              <span class="price">价格:￥{{item.fprice}}</span>
            </div>

          </div>
          <div class="message">个人资料</div>
        </div>
      </van-cell>
      <van-cell >
        <van-col class="baozhang">线上支付、退款自由</van-col>
      </van-cell>
    </van-cell-group>
<van-grid>
  <van-grid-item  :icon="require('../../public/imgs/house2.png')" text="别墅" />
  <van-grid-item  :icon="require('../../public/imgs/fangzi.png')" text="140平米" />
  <van-grid-item  :icon="require('../../public/imgs/yangtai.png')" text="3室2厅" />
  <van-grid-item  :icon="require('../../public/imgs/yangtaix-.png')" text="封闭阳台" />
  <van-grid-item  :icon="require('../../public/imgs/kongtiao.png')" text="空调环境" />
  <van-grid-item  :icon="require('../../public/imgs/dianti.png')" text="电梯" />
  <van-grid-item  :icon="require('../../public/imgs/huayuaniconx.png')" text="小区花园" />
  <van-grid-item  :icon="require('../../public/imgs/jiaotongbianli.png')" text="交通便利" />
</van-grid>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="jumpCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="addCart"
      :data-fid="list[0].fid"
      :data-fprice="list[0].fprice"
      :data-ftitle="list[0].ftitle"
      :data-f_img="list[0].f_img">
        立即下单
      </van-goods-action-button>
    </van-goods-action>
    </div>
  </div>
</template>

<script>

export default {
  
  
  data() {
    return {
      list:[],
    };
  },
  props:["fid"],
  created() {
    this.londMore();
  },
  methods: {
    jumpCart(){
       //查看购物车 22
       this.$router.push("/Cart");
     },
     addCart(event){
       var fid=event.target.dataset.fid;
       var ftitle=event.target.dataset.ftitle;
       var fprice=event.target.dataset.fprice;
       var f_img=event.target.dataset.f_img;
       var url = "foster/addcart";
       var obj = {fid,ftitle,fprice,f_img};
       this.axios.get(url,{params:obj}).then(res=>{
         if(res.data.code==402){
           this.$toast("请登录");
           this.$router.push({path:'/login'})
         }else if(res.data.code==403){
           this.$toast("已经添加过该商家了");
         }else{
           this.$toast("添加成功");
         }
       })
     },
    londMore(){
    var fid=this.fid
    var url="foster/fosterhome";
    var obj={fid};
    this.axios.get(url,
     {params:obj}).then(res=>{
      this.list=res.data.data
     }) 
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push('cart');
    },
    back(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
  .head{
    background:rgba(0,0,0,0.1);
    width: 100%;
    height: 4rem;
    position: fixed;
    line-height: 4rem;
    z-index: 11;
  }
  .back{
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    height: 4rem;
  }
  .right1{
    display: flex;
  }

  .lunbo{
    height: 20rem;
    width: 100%;
  }
  .leftimg{
    width: 3rem;
    height: 3rem;
    display: flex;
  }
  .group{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .baozhang{
    font-size: 0.3rem;
    color: #666;
  }
  .title{
    font-size:1.1rem;
    margin-left: 0.625rem;
  }
  .score{
    font: 0.9rem Tahoma;
    margin-left: 0.75rem;
  }
  .price{
    font: 0.9rem Tahoma;
    margin-left: 0.75rem;
  }
  .message{
    font:bolder 0.9rem Tahoma;
    }

  </style>
  <style>
    .van-grid-item__content:first-child {
    background-color: #e8e8e8;
  }
</style>