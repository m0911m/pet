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
// //二、申请成为寄养家庭
// router.post("/newfosterhome",(req,res)=>{


// 	var uid=req.session.uid;
//   if(!uid){
//   res.send({code:402,msg:"请登录"});
//   	return;
//   }
//  //获取寄养家庭信息
// 	var ftitle=req.body.ftitle;
// 	var fprice=req.body.fprice;
// 	var fscore=req.body.fscore;
// 	var fisonbuy=req.body.fisonbuy;
// 	var faddress=req.body.faddress;
// 	var f_img=req.body.f_img;
// 	// var sql=`INSERT INTO cw_animal VALUES(NULL,'${uid}','${animal_type}','${animal_age}',${animal_sex},'${animal_weight}','${animal_img}')`;
// 	// pool.query(sql,(err,result)=>{
// 	// 	if(err)throw err;
// 	// 	if(result.affectedRows>0){
// 	// 		res.send({code:200,msg:"宠物信息添加成功"})
// 	// 	}else{
// 	// 		res.send({code:401,msg:"宠物信息添加查询失败"})
// 		}
// 	})

// })

module.exports=router;