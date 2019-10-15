//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
// 一、用户登录模块
router.get("/login",(req,res)=>{
	var uname=req.query.uname;
	var upwd=req.query.upwd;
	var sql="SELECT uid FROM cw_user WHERE uname=? AND upwd=?";
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err)throw err;
		if(result.length==0){
			res.send({code:-1,msg:"用户名或密码有误"})
		}else{
			req.session.uid=result[0].uid;
			res.send({code:1,msg:"登录成功"})
		}
	})
})

//二、用户注册模块
router.post("/reg",(req,res)=>{
	var obj=req.body;
	var sql="INSERT INTO cw_user SET ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"注册成功"});
		}else{
			res.send({code:-1,msg:"注册失败"});
		}
	})
})

//三、

//导出路由器
module.exports=router;