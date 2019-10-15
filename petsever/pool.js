const mysql=require("mysql");
var pool=mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"",
	port:3306,
	database:"cw",
	connectionLimit:15
})
//导出连接池对象
module.exports=pool;