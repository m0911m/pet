SET NAMES UTF8;
DROP DATABASE IF EXISTS cw;
CREATE DATABASE cw CHARSET=UTF8;
USE cw;

/**用户信息表**/
CREATE TABLE cw_user(
uid INT PRIMARY KEY AUTO_INCREMENT, #用户id
uname VARCHAR(30),#用户名
upwd VARCHAR(30),#用户密码
uphone VARCHAR(30),#用户手机号码
usex BOOLEAN, #用户性别
uage INT,     #用户年龄
uconstellation BIGINT,#星座
ujob VARCHAR(30),#用户职位
uadderss VARCHAR(128)#用户地址
);
/**宠物信息表**/
CREATE TABLE cw_animal(
  aid INT PRIMARY KEY AUTO_INCREMENT,#宠物id
  uid INT,          #用户id
  animal_type VARCHAR(30),#宠物类型
  animal_age VARCHAR(30),#宠物年纪
  animal_sex BOOLEAN, #宠物性别
  animal_weight VARCHAR(30), #宠物体重
  animal_img VARCHAR(128) #宠物头像
);
/**发布动态信息内容表**/
CREATE TABLE cw_text(
tid INT PRIMARY KEY AUTO_INCREMENT,#id
ttitle VARCHAR(30),#动态主标题 
tsmtitle VARCHAR(30),#副标题
ttxt BIGINT,#正文
t_img VARCHAR(30),#图片路径
uid INT #用户id
);
/**寄养信息数据表**/
CREATE TABLE cw_foster(
  fid INT PRIMARY KEY AUTO_INCREMENT,#id
  ftitle VARCHAR(30),#宠物家的名字
  fprice VARCHAR(30),#价格
  fisonbuy VARCHAR(30),#是否接单
  faddress VARCHAR(30),#寄养地址
  f_img VARCHAR(30),#背景图片
  uid INT #用户uid
);
/**寄养信息详情页**/
CREATE

/**###########################**/
/**数据导入**/
/**用户信息**/
INSERT INTO cw_user VALUES
(null,'tom','12345678','13370358620','0','18','128800','工程师','西安'),
(null,'jack','12345678','13301234567','0','18','128800','工程师','北京');

/**宠物寄养信息导入**/
INSERT INTO cw_foster VALUES
(null,'快乐之家',45,'随时接单','西安市雁塔区',null,null);
