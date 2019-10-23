//引入express
const express=require("express");
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入用户模块路由器
const userRouter=require('./routes/user');
//引入动态消息模块路由器
//const userRouter=require('./routes/news');
//引入寄养模块路由器
//const userRouter=require('./routes/product');
//引入session模块
//引入cors模块
const cors=require("cors");
const session=require("express-session");


//使用express模块
var app=express();
//监听端口
 app.listen(5050);

 //配置跨域
 app.use(cors({
	 origin:["http://127.0.0.1:5050","http://localhost:8080"],
	 credentials:true,
	 methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
	}));
	
	//配置session
	app.use(session({
	//	secret:"128位字符",
	secret: 'sessiontest',
		resave:true,
		saveUninitialized:true
	}));
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static("public"));









//使用路由器,
// /user/reg
app.use( '/user',userRouter );
