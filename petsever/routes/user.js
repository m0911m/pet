//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
// 一、用户登录模块 
router.post("/login",(req,res)=>{
	var uphone=req.body.uphone;
	var upwd=req.body.upwd;
	var sql="SELECT uid FROM cw_user WHERE uphone=? AND upwd=?";
	pool.query(sql,[uphone,upwd],(err,result)=>{
		
		if(err)throw err;
		if(result.length==0){
			res.send({code:401,msg:"用户名或密码有误"})
		}else{
			console.log(result);
			//保存session值
			req.session.uid = result[0].uid;
			//  console.log("----------",req.session.uid);
			res.send({code:200,msg:"登录成功"})
		}
	})
})

//二、用户注册模块   验证过
//2.1用户注册验证用户名手机号是否可用
router.get("/isreg",(req,res)=>{
	var uphone=req.query.uphone;
	var sql="SELECT uid FROM cw_user WHERE uphone=?";
	pool.query(sql,[uphone],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:401,msg:"该手机号手机号被注册过"})
		}else{
			res.send({code:200,msg:"可以注册"})
		}
	})
})
//2.2注册接口
router.post("/reg",(req,res)=>{
		var uphone=req.body.uphone;
		var upwd=req.body.upwd;
		console.log(uphone,upwd)
		var sql=`INSERT INTO cw_user VAlUES(NULL,NULL,${upwd},${uphone},NULL,NULL,NULL,NULL,NULL)`;
		pool.query(sql,(err,result)=>{
			if(err)throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:"注册成功"});
			}else{
				res.send({code:401,msg:"注册失败"});
			}
		})
	})
	

//三、宠物信息添加   验证过
router.post("/updatapetmessage",(req,res)=>{
	//获取发布动态用户的uid
 	var uid=req.session.uid;
  if(!uid){
  res.send({code:402,msg:"请登录"});
  	return;
  }
 //获取宠物物信息
	var animal_type=req.body.animal_type;
	var animal_bir=req.body.animal_bir;
	var animal_sex=req.body.animal_sex;
	var animal_weight=req.body.animal_weight;
	console.log(animal_type);
	// var animal_img=req.body.animal_img;
	var sql=`INSERT INTO cw_animal VALUES(NULL,${uid},'${animal_type}','${animal_bir}',${animal_sex},'${animal_weight}',NULL)`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"宠物信息添加成功"})
		}else{
			res.send({code:401,msg:"宠物信息添加查询失败"})
		}
	})
})

//四、宠物信息删除   验证过
router.get("/delpetmessage",(req,res)=>{
	//获取发布动态用户的uid
 	var uid=req.session.uid;
  if(!uid){
  res.send({code:402,msg:"请登录"});
  	return;
	}
	var aid=req.query.aid;
	console.log("宠物",aid)
 //删除宠物信息
	var sql="DELETE FROM cw_animal WHERE aid=?"
	pool.query(sql,[aid],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"宠物信息删除成功"})
		}else{
			res.send({code:401,msg:"宠物信息删除失败"})
		}
	})
})
//五、查询宠物信息  验证过
router.get("/selectpetmessage",(req,res)=>{
	//获取发布动态用户的session_id
	 var uid=req.session.uid;
  //3:如果用户没登录返回错误消息
	if(!uid){
		res.send({code:402,msg:"请登录"});
		return; 
	 }
 //获取宠物物信息
	// var animal_type=req.query.animal_type;
	// var animal_age=req.query.animal_age;
	// var animal_sex=req.query.animal_sex;
	// var animal_weight=req.query.animal_weight;
	// var animal_img=req.query.animal_img;
	var sql="SELECT  aid,animal_type,animal_bir,animal_sex,animal_weight,animal_img FROM cw_animal WHERE uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"宠物信息查询成功",data:result})
		}else{
			res.send({code:401,msg:"宠物信息查询失败"})
		}
	})
})




//六、修改用户个人信息
router.post("/update",(req,res)=>{
	var uid=req.session.uid;
  if(!uid){
  res.send({code:402,msg:"请登录"});
  	return;
  }
var uname=req.body.uname;
var usex=req.body.usex;
var uage=req.body.uage;
var uconstellation=req.body.uconstellation;
var ujob=req.body.ujob;
var uadderss=req.body.uadderss;
var sql="UPDATE cw_user SET uname=?,usex=?,uage=?,uconstellation=?,ujob=?,uadderss=? WHERE uid=?"
pool.query(sql,[uname,usex,uage,uconstellation,ujob,uadderss,uid],(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0){
		res.send({code:200,msg:"修改成功"});
	}else{
	res.send({code:401,msg:"修改失败"});
	}
})

})


router.get("/usermessage",(req,res)=>{
	//获取发布动态用户的session_id
	 var uid=req.session.uid;
  //3:如果用户没登录返回错误消息
	if(!uid){
		res.send({code:402,msg:"请登录"});
		return; 
	 }
	var sql="SELECT * FROM cw_user WHERE uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}
	})
})




//导出路由器
module.exports=router;