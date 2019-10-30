//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//一、动态发布模块   验证过
router.post("/updatamessagelist",(req,res)=>{
	//获取发布动态用户的uid
	var uid=req.session.uid;
	// console.log(uid)	
 if(!uid){
 res.send({code:402,msg:"请登录"});
 	return;
 }
//获取用户发布的信息
var ttitle=req.body.ttitle;
var tsmtitle=req.body.tsmtitle;
var ttxt=req.body.ttxt;
var t_img=req.body.t_img;
var sql=`INSERT INTO cw_text VALUES(NULL,'${ttitle}','${tsmtitle}',NULL,NULL,'${ttxt}','${t_img}',NULL)`;
pool.query(sql,(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0){
	res.send({code:200,msg:"添加成功"})
}else{
	res.send({code:401,msg:"添加失败"})
}
})
});
//二、动态页浏览模块     验证过
router.get("/messagelist",(req,res)=>{
var sql="SELECT tid,ttitle,tsmtitle,ttxt,t_img,taddress,tuname,uid FROM cw_text";
pool.query(sql,(err,result)=>{
	// console.log("终极验证"+req.session.uid)
	if(err) throw err;
	if(result.length>0){
		res.send({code:200,msg:"查询成功",data:result})
	}else{
		res.send({code:401,msg:"查询失败"})
	}
})
});

//三、首页故事模块  验证过
router.get("/indexstory",(req,res)=>{
	var sql="SELECT iid,uid,ititle,iuname,ismtitle,itxt,itime,i_img,i_icon FROM cw_sindex";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
			if(result.length>0){
				res.send({code:200,msg:"查询成功",data:result})
			}else{
				res.send({code:401,msg:"查询失败"})
			}
	})
})
//四、轮播接口
router.get("/selectlunbo",(req,res)=>{
	var sql="SELECT id,luobo_url FROM cw_indexlunbo";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"轮播查询成功",data:result})
		}else{
			res.send({code:401,msg:"轮播查询失败"})
		}
	})
})
//评论模块
// router.post("/views",(req,res)=>{
//   var uid=req.session.uid;
//  if(!uid){
//  res.send({code:402,msg:"请登录"});
//  	return;
//  }
//  var vcotnet=req.body.vcotnet;
//  var vtime=req.body.vtime;
//  var v_img=req.body.v_img;

// })

//查找动态评论
router.get("/viewsdetail",(req,res)=>{
	var tid=req.query.tid;
	var sql='SELECT * FROM cw_views WHERE tid=?';
	pool.query(sql,[tid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}
	})
	
	 })

//查看动态详情页
router.get("/detailstory",(req,res)=>{
	var tid=req.query.tid;
	console.log("tid:"+tid)
	var sql="SELECT tid,ttitle,tsmtitle,ttxt,t_img,taddress,tuname,uid FROM cw_text WHERE tid=?";
	pool.query(sql,[tid],(err,result)=>{
		if(err)throw err;
			if(result.length>0){
				res.send({code:200,msg:"查询成功",data:result})
			}else{
				res.send({code:401,msg:"查询失败"})
			}
	})
	});


module.exports=router;