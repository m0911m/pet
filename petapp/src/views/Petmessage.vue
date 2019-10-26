<template>
  <div>
    <!-- 1.列表头部 -->
    <div class="divflex msgpadding">
      <!-- 1.1左边 返回 -->
      <div @click="back">
        <van-icon name="arrow-left" />
      </div>
      <!-- 1.2标题 -->
      <div>
        添加宠物
      </div>
      <!-- 1.3右边 保存 -->
      <div @click="save">
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
        <div class="petavatar">宠物头像</div>
        <div class="round">
          <van-uploader v-model="fileList" multiple :max-count="1"/>
        </div>
      </div>
      <hr>
      <!-- 2.2昵称 -->
      <div class="divflex msgpadding" @click="showPop1">
        <div>昵称</div>
        <div class="divright">
          <span id="petname">未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <!-- 弹出层输入昵称 -->
      <van-popup v-model="show1" position="top">
        <div class="select">
          <div @click="namecancel">取消</div>
          <div @click="nameconfirm">确定</div>
        </div>
        <van-cell-group>
          <van-field v-model="setname" placeholder="请输入昵称" />
        </van-cell-group>
      </van-popup>
      <hr>
      <!-- 2.3宠物类型 -->
      <div class="divflex msgpadding" @click="jumpkind">
        <div>宠物类型</div>
        <div class="divright">
          <span id="petkind">未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <hr>
      <!-- 2.4年纪 -->
      <div class="divflex msgpadding" @click="showPop2">
        <div>出生日期</div>
        <div class="divright">
          <span id="petage">未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <!-- 弹出层输入年纪 -->
      <van-popup v-model="show2" position="bottom">
        <van-datetime-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" type="date" @confirm="ageconfirm" @cancel="agecancel"/>
      </van-popup>
      <hr>
      <!-- 2.5性别 -->
      <div class="divflex msgpadding" @click="showPop3">
        <div>性别</div>
        <div class="divright">
          <span id="petsex">未填写</span>
          <span>&gt;</span>
        </div>
      </div>
      <!-- 弹出层输入性别 -->
      <van-popup v-model="show3" position="bottom">
        <van-picker v-model="setsex" show-toolbar :columns="petsex" @cancel="sexCancel" @confirm="sexConfirm"/>
      </van-popup>
      <hr>
      <!-- 2.6体重 -->
      <div class="divflex msgpadding" @click="showPop4">
        <div>体重</div>
        <div class="divright">
          <span id="weight">未填写(kg)</span>         
          <span>&gt;</span>
        </div>
      </div>
      <!-- 弹出层输入体重 -->
      <van-popup v-model="show4" position="top">
        <div class="select">
          <div @click="weightcancel">取消</div>
          <div @click="weightconfirm">确定</div>
        </div>
        <van-cell-group>
          <van-field v-model="setweight" placeholder="请输入体重" />
        </van-cell-group>
      </van-popup>
      <hr>
      <!-- 2.7是否绝育 -->
      <div class="divflex msgpadding" @click="showPop5">
        <div>是否绝育</div>
        <div class="divright">
          <span id="petis">未填写</span>          
          <span>&gt;</span>
        </div>
      </div>
       <!-- 弹出层输入绝育 -->
      <van-popup v-model="show5" position="bottom">
        <van-picker show-toolbar :columns="petis" @cancel="isCancel" @confirm="isConfirm"/>
      </van-popup>
    </div>
    <!-- 3.te别信息 -->
    <div class="textleft">特别信息</div>
    <div class="msgdetail">
      <!-- 3.1Ta是调皮鬼么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta是调皮鬼么？</div>  
        <div class="divflex">
          <div>
            <input type="radio" name="is" value="1" id="yes">
            <label for="yes">是</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="no">
            <label for="no">否</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="uncer">
            <label for="uncer">不确定</label>
          </div>
        </div>
      </div>
      <hr>
      <!-- 3.2Ta胆子特别小么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta胆子特别小么？</div>
        <div class="divflex">
          <div>
            <input type="radio" name="is" value="1" id="yes">
            <label for="yes">是</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="no">
            <label for="no">否</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="uncer">
            <label for="uncer">不确定</label>
          </div>
        </div>
      </div>
      <hr>
      <!-- 3.3Ta和其他猫咪相处友么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta和其他猫咪相处友么？</div>
        <div class="divflex">
          <div>
            <input type="radio" name="is" value="1" id="yes">
            <label for="yes">是</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="no">
            <label for="no">否</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="uncer">
            <label for="uncer">不确定</label>
          </div>
        </div>
      </div>
      <hr>
      <!-- 3.4Ta和其他狗狗相处友么？ -->
      <div class=" msgpadding">
        <div class="textleft">Ta和其他狗狗相处友么？</div>
        <div class="divflex">
         <div>
            <input type="radio" name="is" value="1" id="yes">
            <label for="yes">是</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="no">
            <label for="no">否</label>
          </div>
          <div>
            <input type="radio" name="is" value="1" id="uncer">
            <label for="uncer">不确定</label>
          </div>
        </div>
      </div>
    </div>
    <!--4. 宠物简介 -->
    <div class="textleft">宠物简介</div>
    <div class="msgdetail">
      <div class="textleft">宠物简介</div>
      <!-- 简介输入框 -->
      <div class="textleft">
        <textarea cols="36" rows="8" placeholder="这是我的宠物"></textarea>
      </div>
    </div>
    <div class="msgsave">
      <div @click="back">取消</div>
      <div @click="save">保存</div>
    </div>
  </div>
</template>
<script>
var setkind;
var setis;
var setdate;
export default {
  data(){
    return{
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      setname:"",
      minDate:new Date(2005,1,1),
      maxDate:new Date(),
      currentDate: new Date(),
      petsex: ['GG', 'MM'],
      setweight:"",
      fileList: [],
      petis:["是","否"],
      setsex:"",
      }
  },
  methods: {
    //保存
    save(){
      console.log(this.fileList[0],setkind,setdate,this.setsex,this.setname,this.setweight,setis);
    },
    // 点击返回或取消
    back(){
      this.$messagebox.confirm('',{
        message:'是否放弃保存',
        title:'温馨提示',
        confirmButtonText:"放弃"
      })
      .then(active=>{
      this.$router.push("/Petlist");
      })
      .catch(err=>{});
    },
    // 绝育弹出层取消
    isCancel(){
      this.show5=false;
    },
    // 绝育弹出层确定
    isConfirm(value){
      var is=document.getElementById("petis");
      setis=value;
      is.innerHTML=value;
      is.style.color="#000";
      this.show5=false;
    },
    //绝育弹出层
    showPop5(){
      this.show5=true;
    },
    //体重弹出层取消
    weightcancel(){
      this.show4=false;
    },
    // 体重弹出层确定
    weightconfirm(){
      var weight=document.getElementById("weight");
      weight.innerHTML=`${this.setweight}kg`;
      weight.style.color="#000";
      this.show4=false;
    },
    // 体重弹出层
    showPop4(){
      this.show4=true;
    },
    // 性别弹出层取消
    sexCancel(){
      this.show3=false;
    },
    // 性别弹出层确定
    sexConfirm(value){
      var sex=document.getElementById("petsex");
      this.setsex=value;
      sex.innerHTML=value;
      sex.style.color="#000";
      this.show3=false;
    },
    // 性别弹出层
    showPop3(){
      this.show3=true;
    },
    // 出生日期弹出层取消
    agecancel(){
      this.show2=false;
    },
    // 出生日期弹出层确定
    ageconfirm(value){
      var age=document.getElementById("petage");
      var year=value.getFullYear();
      var month=value.getMonth();
      var date=value.getDate();
      setdate=`${year}-${month+1}-${date}`;
      age.innerHTML=`${year}-${month+1}-${date}`;
      age.style.color="#000";
      this.show2=false;
    },
    // 出生日期弹出层
    showPop2(){
      this.show2=true;
    },
    // 宠物类型选择
    jumpkind(){
      this.$router.push("/Kind");
    },
    // 昵称弹出层确定
    nameconfirm(){
      var name=document.getElementById("petname");
      name.innerHTML=this.setname;
      name.style.color="#000";
      this.show1=false;
    },
    // 昵称弹出层取消
    namecancel(){
      this.show1=false;
    },
    // 昵称弹出层
    showPop1(){
      this.show1=true;
    },
  },
  beforeRouteEnter (to, from, next) {
    //判断如果从petlist页面进来,就为false刷新页面,kind页面进来就为true不刷新
   if(from.name==='Petlist'){
     to.meta.keepAlive=false;
   } else{
     to.meta.keepAlive=true;
   }
   next();
  },
  activated() {
    this.question=this.$store.state.question
  },
  mounted() { 
    var kind=document.getElementById("petkind");
    this.petkind.$on(
      "ReceiveKind", function(item) { 
        setkind=item;
        kind.innerHTML = item; 
        kind.style.color="#000";
      }) 
    }
}
</script>
<style scoped>
  .divflex{
    display:flex;
    justify-content: space-between;
  }
  .msgpadding{
    padding:10px 10px;
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
  .select{
    display: flex;
    justify-content: space-between;
    margin:10px;
    color:#1989fa;
    font-size:14px;
  }
  .petavatar{
    margin-top:25px;
  }
  .msgsave{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .class{
    border:1px solid transparent;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
