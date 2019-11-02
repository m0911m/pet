<template>
  <div>
    <van-address-edit :area-list="areaList"  show-search-result :search-result="searchResult" save-button-text="提交申请" area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail"/>
  </div>
</template>
<script>
import areaList from "../assets/js/area"
export default {
  data(){
    return{
      username:"",
      homename:"",
      phone:"",
      areaList,
      searchResult:[]
    }
  },
  methods:{
    onSave(){
      Toast('save');
    },
    onDelete(){
      Toast('delete');
    },
    onChangeDetail(val){
      if(val){
        this.searchResult=[{
          name:"西安高新中心",
          address:"西安高新区"
        }];
      }else{
        this.searchResult=[];
      }
    }
  }
}
</script>
<style>
  

</style>