<template>
  <div>
    <!-- 1.列表头部 -->
    <div class="divflex msgpadding">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>
        添加宠物
      </div>
      <div>
        <router-link  to="/Petlist" class="headerright">
          保存
        </router-link>
      </div>
    </div>
    <hr class="hrmargin">
    <!-- 2.详细信息 -->
    <div class="msgdetail">
      <!-- 2.1宠物头像 -->
      <div class="divflex msgpadding">
        <div>宠物头像</div>
        <div><van-icon name="add-o" /></div>
      </div>
      <hr>
      <!-- 2.2昵称 -->
      <div class="divflex msgpadding">
        <div>昵称</div>
        <div class="divright">
          <span>未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <hr>
      <!-- 2.3宠物类型 -->
      <div class="divflex msgpadding">
        <div>宠物类型</div>
        <div class="divright">
          <span>未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <hr>
      <!-- 2.4年纪 -->
      <div class="divflex msgpadding">
        <div>年纪</div>
        <div class="divright">
          <span>未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <hr>
      <!-- 2.5性别 -->
      <div class="divflex msgpadding">
        <div>性别</div>
        <div class="divright">
          <span>未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <hr>
      <!-- 2.6体重 -->
      <div class="divflex msgpadding">
        <div>体重</div>
        <div class="divright">
          <span>未填写</span>         
          <span>&gt;</span>
        </div>
      </div>
      <hr>
      <!-- 2.7是否绝育 -->
      <div class="divflex msgpadding">
        <div>是否绝育</div>
        <div class="divright">
          <span>未填写</span>          
          <span>&gt;</span>
        </div>
      </div>
    </div>
    <!-- 3.te别信息 -->
    <div class="textleft">特别信息</div>
    <div class="msgdetail">
      <!-- 3.1Ta是调皮鬼么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta是调皮鬼么？</div>  
        <div class="divflex">
          <div><van-icon name="passed" />是</div>
          <div><van-icon name="passed" />否</div>
          <div><van-icon name="passed" />不确定</div>
        </div>
      </div>
      <hr>
      <!-- 3.2Ta胆子特别小么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta胆子特别小么？</div>
        <div class="divflex">
          <div><van-icon name="passed" />是</div>
          <div><van-icon name="passed" />否</div>
          <div><van-icon name="passed" />不确定</div>
        </div>
      </div>
      <hr>
      <!-- 3.3Ta和其他猫咪相处友么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta和其他猫咪相处友么？</div>
        <div class="divflex">
          <div><van-icon name="passed" />是</div>
          <div><van-icon name="passed" />否</div>
          <div><van-icon name="passed" />不确定</div>
        </div>
      </div>
      <hr>
      <!-- 3.4Ta和其他狗狗相处友么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta和其他狗狗相处友么？</div>
        <div class="divflex">
          <div><van-icon name="passed" />是</div>
          <div><van-icon name="passed" />否</div>
          <div><van-icon name="passed" />不确定</div>
        </div>
      </div>
    </div>
    <!-- 宠物简介 -->
    <div>

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .divflex{
    display:flex;
    justify-content: space-between;
  }
  .msgpadding{
    padding:5px 10px;
    }
  .hrmargin{
    margin: 0;
  }
  .headerright{
    color: #000;
  }
  .msgdetail{
    width: 90%;
    background:#f1f1f1;
    margin: 10px auto;
    border:1px solid transparent;
    border-radius: 5px;
    padding: 5px 0;
    font-size: 15px;
  }
  .divright{
    color:#ccc;
  }
  .textleft{
    width: 90%;
    margin:0 auto;
    text-align: left;
  }
</style>
