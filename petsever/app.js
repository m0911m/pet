//引入express
const express=require("express");
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入session模块
const session=require("express-session")


//引入用户路由器
const userRouter=require('./routes/user');
const fosterRouter=require('./routes/foster');
const newsRouter=require('./routes/news');


//引入session模块
//引入cors模块
const cors=require("cors");


//使用express模块
var app=express();
//监听端口
app.listen(5050);

//配置session
app.use(session({
	secret:"128位字符",
	resave:true,
	saveUninitialized:true
}));
//配置跨域
app.use(cors({
	origin:["http://127.0.0.1:8080","http://localhost:8080"],
	credentials:true
	// methods:['GET','POST'], 
	// alloweHeaders:['Conten-Type', 'Authorization'] 
})); 

//配置session 
app.use(session({ 
	secret:"sessiontest", 
	// cookie:{maxAge:10000},
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
app.use( '/foster',fosterRouter );
app.use( '/news',newsRouter );
