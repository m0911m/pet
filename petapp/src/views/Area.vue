<template>
  <div>
    <van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" title="请选择" @change="onChange" />
  </div>
</template>
<script>
import areaList  from '../assets/js/area.js'
export default {
  components: {areaList},
  data(){
    return{
      areaList,
    }
  },
  methods:{
    onChange(value,index){
      // console.log(index)
    }
  }
}
</script>