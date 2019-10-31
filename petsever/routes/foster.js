//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//一、寄养家庭列表
router.get("/fosterlist",(req,res)=>{
	var sql="SELECT fid,ftitle,fprice,fscore,fisonbuy,f_length,faddress,f_img,f_uimg,fprice,uid FROM cw_foster";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}

	})
})
//二、查询指定的寄养家庭
router.get("/fosterhome",(req,res)=>{
	var fid=req.query.fid;
	var sql="SELECT fid,ftitle,fprice,fscore,f_img,f_uimg FROM cw_foster WHERE fid=?";
	pool.query(sql,[fid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}
	})
})
//三、搜索家庭
router.get("/searchhome",(req,res)=>{
	var faddress=req.query.faddress;
	console.log(faddress);
	var sql=`SELECT fid,ftitle,fprice,fscore,fisonbuy,f_length,faddress,f_img,f_uimg,uid FROM cw_foster WHERE faddress LIKE "%${faddress}%"`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}
	})
})
//四、购物车模块
router.get("/addcart",(req,res)=>{
	var uid = req.session.uid;
	if(!uid){
	 res.send({code:402,msg:"请登录"});
	 return; 
	}
	var fid=req.query.fid;
	var ftitle=req.query.ftitle;
	var fprice=req.query.fprice;
	var f_img=req.query.f_img;
	var sql = "SELECT cid FROM cw_cart WHERE uid = ? AND fid = ?";
	pool.query(sql,[uid,fid],(err,result)=>{
	 if(err)throw err; 
	 if(result.length==0){
	 var sql = `INSERT INTO cw_cart VALUES(null,${fid},'${ftitle}','${fprice}',${uid},'${f_img}')`;
	 }else{
		res.send({code:403,msg:"已添加"})
		return;
	 }
	 pool.query(sql,(err,result)=>{
	   if(err)throw err;
	   res.send({code:200,msg:"添加成功"})
	 })
	})
   });
//五、查询购物车
router.get("/selectcart",(req,res)=>{
	var uid = req.session.uid;
	if(!uid){
	 res.send({code:402,msg:"请登录"});
	 return; 
	}
	var sql="SELECT cid,ftitle,fprice,f_img FROM cw_cart WHERE uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:200,msg:"查询成功",data:result})
		}else{
			res.send({code:401,msg:"查询失败"})
		}
	})
});
//六、删除购物车
router.get("/delcart",(req,res)=>{
	var uid = req.session.uid;
	if(!uid){
	 res.send({code:402,msg:"请登录"});
	 return; 
	}
	var cid=req.query.cid;
	var sql="DELETE FROM cw_cart WHERE cid=?";
	pool.query(sql,[cid],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"删除成功"})
		}else{
			res.send({code:401,msg:"删除失败"})
		}
		})
});
// /申请成为寄养家庭
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