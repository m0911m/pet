//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//一、寄养家庭列表
router.get("/fosterlist",(req,res)=>{
	var sql="SELECT fid,ftitle,fprice,fscore,fisonbuy,f_length,faddress,f_img,f_uimg,uid FROM cw_foster";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}

	})
})
//二、申请成为寄养家庭
router.post()

module.exports=router;