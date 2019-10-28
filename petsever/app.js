//引入express
const express=require("express");
//引入body-parser中间件
const bodyParser=require("express");

//引入cookie模块
const cookieParser=require("cookie-parser");

//引入cors模块
const cors=require("cors");
//引入session模块
var  session=require("express-session");


//引入用户路由器
const userRouter=require("./routes/user");
const fosterRouter=require("./routes/foster");
const newsRouter=require("./routes/news");

//使用express模块
var app=express();



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
	cookie:{maxAge:10000},
	resave:true, 
	saveUninitialized:true
})); 

// 使用cookie
app.use(cookieParser("sessiontest"));



// //配置跨域
// app.use(cors({
	// 	origin:["http://127.0.0.1:5050","http://localhost:8080"],
	// 	credentials:true
	// }));
	//设置跨域访问  
	// app.all('/', function(req, res, next) {  
		// 	next();  
		// 	res.header("Access-Control-Allow-Origin", "true");  
		// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");  
		// 	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
		// 	res.header("X-Powered-By",' 3.2.1')  
		// 	res.header("Content-Type", "application/json;charset=utf-8");  
		// });  
		
		
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

//托管静态资源到public目录下
app.use(express.static("public"));









//使用路由器,
// /user/reg
app.use( '/user',userRouter );
app.use( '/foster',fosterRouter );
app.use( '/news',newsRouter );

//监听端口
app.listen(5050);