//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
// 一、用户登录模块
router.post("/login",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	console.log(uname);
	console.log(upwd);
	
	var sql="SELECT uid FROM cw_user WHERE uname=? OR uphone=? AND upwd=?";
	pool.query(sql,[uname,uname,upwd],(err,result)=>{
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
//2.1用户注册验证用户名手机号是否可用
router.get("/isreg",(req,res)=>{
	var uname=req.query.uname;
	var sql="SELECT uid FROM cw_user WHERE uname=? OR uphone=?";
	pool.query(sql,[uname,uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:-1,msg:"用户名或手机号被注册过"})
		}else{
			res.send({code:1,msg:"可以注册"})
		}
	})
})
//2.2注册接口
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

//三、动态发布模块
router.post("/updatamessagelist",(req,res)=>{
	//获取发布动态用户的uid
	var uid=req.session.uid;
if(!uid){
	res.send({code:-2,msg:"请登录"});
	return;
}
//获取用户发布的信息
var ttitle=req.body.ttitle;
var tsmtitle=req.body.tsmtitle;
var ttxt=req.body.ttxt;
var t_img=req.body.t_img;
var sql=`ISNET INTO cw_text VALUES(NULL,${ttitle},${tsmtitle},${ttxt},${t_img},${uid})`;
pool.query(sql,(err,result)=>{
	if(err)throw err;
	if(affectedRows>0){
	res.send({code:1,msg:"添加成功"})
}else{
	res.send({code:-1,msg:"添加失败"})
}
})
});
//四、动态页浏览模块
router.get("/messagelist",(req,res)=>{
var sql=SELECT  
});

//导出路由器
module.exports=router;