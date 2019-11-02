const mysql=require("mysql");
var pool=mysql.createPool({
	host:"localhost",
	user:"root",
	password:"",
	port:3306,
	database:"cw",
	connectionLimit:15
})
//导出连接池对象
module.exports=pool;