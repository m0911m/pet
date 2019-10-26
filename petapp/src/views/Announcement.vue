<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar left-arrow @click-left="onClickLeft"/>
    <!-- 公告详情 -->
    <div>
      <!-- 图片 -->
      <div class="detail-img">
        <img src="../../public/imgs/10.jpg" alt="" class="img">
      </div>
      <!-- 正文 -->
      <div>
        <div class="title">
          <h3>【重要】园长精编 [ 寄养须知 ]</h3>
          <p>重点！寄养前必须了解的【如何选择家庭】</p>
        </div>
        <div>
          <h4>【宠物主人须知】</h4>
          <p>【作为宠物主人，您需要知道如何选择适合自己宠物的家庭】</p>
          <p>1.查看家庭环境照片</p>
          <p>2.查看家庭已开通服务信息是否匹配</p>
          <p>3.查看家庭评价</p>
          <p>*重点：要求您私下交易行为的家庭，您一定要警惕。当出现问题时，您的宠物得不到任何保障，您的资金也得不到保障。</p>
          <p>【我是宠物主人，我需要知道】</p>
          <p>1.我应向寄养家庭提供宠物的性格、爱好、生活习惯等详细信息，以协助寄养家庭在寄养期间照顾我的宠物。</p>
          <p>2.我保证在寄养期间联系方式24小时开通。</p>
        </div>
        <div>
          <h4>【寄养家庭须知】</h4>
          <p>【我是寄养家庭，我需要知道】</p>
          <p>1.同时接纳寄养宠物的数量不超过3只</p>
          <p>2.我必须明确告知宠物主人宠物情况</p>
          <p>3.我需每天在app中以照片或视频的方式分享寄养故事。</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push('/Message');
    },
  }
}
</script>
<style scoped>
  .detail-img{
    width:100%;
    height:150px;
    overflow: hidden;
  }
  .img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .title{
    text-align: center;
  }
</style>