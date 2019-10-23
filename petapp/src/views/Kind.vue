<template>
  <div>
    <!-- 1.种类头部 -->
    <div class="kindheader">
      <!-- 1.1左边 返回-->
      <div>
        <router-link to="/Petmessage">
          <van-icon name="arrow-left" />
        </router-link>
      </div>
      <!-- 1.2标题 -->
      <div>
        宠物品种
      </div>
      <!-- 1.3右边 确定 -->
      <div>
        <router-link  to="/Petmessage">确定</router-link>
      </div>
    </div>
    <hr>
    <!-- 2宠物种类输入框 -->
    <div>
      <van-search placeholder="请输入宠物种类" v-model="value" />
    </div>
    <!-- 3.宠物种类切换面板按钮 -->
    <div class="container">
      <div data-id="tab1" @click="handle">狗</div>
      <div>|</div>
      <div data-id="tab2" @click="handle">猫</div>
      <div>|</div>
      <div data-id="tab3" @click="handle">小宠</div>
    </div>
    <!-- 4.宠物种类子面板 -->
    <mt-tab-container v-model="active" class="textleft">
      <!-- 狗种类子面板 -->
      <mt-tab-container-item id="tab1">
        <van-index-bar>
          <van-index-anchor index="A" />
          <van-cell title="爱尔兰猎狼犬" />
          <van-cell title="爱尔兰雪达犬" />
          <van-cell title="阿拉斯加雪橇犬" />
          <van-cell title="阿富汗猎犬" />
          <van-index-anchor index="B" />
          <van-cell title="标准贵宾犬" />
          <van-cell title="巴吉度犬" />
          <van-cell title="北京犬" />
          <van-cell title="比熊犬"/>
          <van-cell title="波士顿犬"/>
          <van-cell title="博美犬"/>
          <van-cell title="巴哥犬"/>
          <van-cell title="波利犬"/>
          <van-cell title="巴仙吉犬"/>
          <van-cell title="边境牧羊犬"/>
          <van-cell title="标准雪纳瑞"/>
          <van-cell title="比格犬"/>
          <van-cell title="贝林顿梗"/>
          <van-cell title="波尔多犬"/>
          <van-cell title="伯恩山犬"/>
          <van-cell title="波音达犬"/>
          <van-cell title="比利时牧羊犬"/>
          <van-cell title="巴西菲勒"/>
          <van-cell title="波尔多犬"/>
          <van-index-anchor index="C" />
          <van-cell title="串串-小型犬"/>
          <van-cell title="查理王小猎犬"/>
          <van-cell title="柴犬"/>
          <van-cell title="串串-中型犬"/>
          <van-cell title="串串-大型犬"/>
          <van-cell title="川东猎犬"/>
          <van-index-anchor index="D" />
          <van-cell title="短脚长身梗"/>
          <van-cell title="牛头梗"/>
          <van-cell title="大麦町犬"/>
          <van-cell title="斗牛獒犬"/>
          <van-cell title="杜高犬"/>
          <van-cell title="杜宾犬"/>
          <van-cell title="大丹犬"/>
          <van-cell title="大白熊犬"/>
          <van-cell title="德国牧羊犬"/>
          <van-index-anchor index="E" />
          <van-cell title="恶霸犬"/>
          <van-index-anchor index="F" />
          <van-cell title="法国斗牛犬"/>
          <van-cell title="法老王猎犬"/>
          <van-index-anchor index="F" />
        </van-index-bar>
      </mt-tab-container-item>
      <!-- 猫种类子面板 -->
      <mt-tab-container-item id="tab2">
        <van-index-bar>
          <van-index-anchor index="A" />
          <van-cell title="埃及猫" />
          <van-cell title="奥西猫" />
          <van-cell title="阿比西尼亚猫" />
          <van-index-anchor index="B" />
          <van-cell title="布偶猫" />
          <van-cell title="波斯猫" />
          <van-cell title="伯曼猫" />
          <van-cell title="巴厘猫" />
          <van-cell title="波米拉猫" />
          <van-cell title="彼得秃猫" />
          <van-index-anchor index="C" />
          <van-cell title="东奇尼猫" />
          <van-cell title="德文卷毛猫" />
        </van-index-bar>
      </mt-tab-container-item>
      <!-- 小宠种类子面板 -->
      <mt-tab-container-item id="tab3">
          <van-index-anchor index="C" />
          <van-cell title="仓鼠" />
          <van-cell title="刺猬" />
          <van-index-anchor index="D" />
          <van-cell title="貂" />
          <van-index-anchor index="G" />
          <van-cell title="龟" />
          <van-index-anchor index="L" />
          <van-cell title="龙猫" />
          <van-index-anchor index="N" />
          <van-cell title="鸟" />
          <van-index-anchor index="S" />
          <van-cell title="松鼠" />
          <van-cell title="蛇" />
          <van-index-anchor index="T" />
          <van-cell title="兔子" />
          <van-cell title="豚鼠" />
          <van-index-anchor index="X" />
          <van-cell title="蜥蜴" />
          <van-cell title="小香猪" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:"",
      active:"tab1"
      }
  },
   methods:{
    handle(e){
      var id=e.target.dataset.id;
      this.active=id;
    }
  }
}
</script>
<style scoped>
  .kindheader{
    display: flex;
    justify-content: space-between;
    margin: 8px 8px;
  }
  .container{
    display: flex;
    justify-content: space-around;
  }
  .textleft{
    text-align: left;
  }
</style>