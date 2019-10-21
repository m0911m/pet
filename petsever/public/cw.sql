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
tuname VARCHAR(30),#用户昵称
taddress VARCHAR(128),#用户地址
ttxt TEXT,#正文
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
/**首页故事数据表**/
CREATE TABLE cw_sindex(
iid INT PRIMARY KEY AUTO_INCREMENT,
uid INT,
ititle VARCHAR(30),#主标题
iuname VARCHAR(30),#用户昵称
ismtitle VARCHAR(30),#小标题
itxt TEXT,   #正文
itime BIGINT,  #发布时间
i_img VARCHAR(128),#图片
i_icon VARCHAR(128) #头像
);
/**首页轮播图数据表**/
CREATE TABLE cw_indexlunbo(
id INT PRIMARY KEY AUTO_INCREMENT,
luobo_url VARCHAR(30)#轮播图地址
);
/**购物车信息数据表**/
CREATE TABLE cw_cart(
 cid INT PRIMARY KEY AUTO_INCREMENT,
 uid INT,   #用户id
 ftitle VARCHAR(30),#宠物家的名字
 fprice DECIMAL(10,2) #价格
);
ALTER TABLE cw_cart ADD uid INT;
/**###########################**/
/**数据导入**/
/**用户信息**/
INSERT INTO cw_user VALUES
(null,'tom','12345678','13370358620','0','18','128800','工程师','西安'),
(null,'jack','12345678','13301234567','0','18','128800','工程师','北京');

/**宠物寄养信息导入**/
INSERT INTO cw_foster VALUES
(null,'快乐之家',45,'随时接单','西安市雁塔区',null,null);



/**首页故事信息导入**/
INSERT INTO cw_sindex VALUES
(null,'999','被姥姥带大的狗子','大长腿和小短腿','哈哈看到这个话题果断参与','从小就喜欢狗狗猫猫，花花草草的，自己定的底线是不管是啥，进了家门就要好好地对待！开始工作时一直住宿舍，也没这条件养狗呀猫的，还是住在平房的宿舍时，也曾在窗台上种过几盆花草，等待花苞绽开时，却在某一天下班回来不知所踪，也就没了养花的心情。等有了自己的家，一直就放任了自己种花的爱好，只是水平有限，花时有夭折，自我批评不断，一有机会还是会往家搬花。对于狗狗却从没下过要养的决心，谁知咱的儿，是一个在街上见了小鸡小鸭，特别是小狗就挪不了步的娃，这样小鸡小鸭小兔会不时进踞我的家，伤心过几次的儿子最后也同意了我的观点：再喜欢还是不买了，它们都是一条命！曾有那么一次，儿子在放学的路上决不挪步就为了一只在寒风中颤抖的小小狗，最终小狗进了我们的家，谁知它长成了满脸的胡子，儿也不小，没法就把不喜欢狗的爷爷奶奶也扯了进来：寄养到住在乡下的爷爷家了，一有空就去乡下看它，而长得不小的它一见儿子去热情得一步不离！两位老人却因为疼孙子从此对狗也有了一份爱好，某一天狗狗失踪了，他们还伤心了许久。嫂子比我更爱好狗狗猫猫，家中也一直养着，而我和儿子一有了想狗的念头就回娘家玩。更进一步的办法就是趁儿子寒暑期时，如果嫂子家的小狗出生还未送人就抱来家养上一个假期，开学前送回，就这样陆陆续续的白色的小京巴，黄色的小博美让儿子的爱心有了施展的空间。每次送走都是一个舍不得，特别是对一只小博美西西，对舅妈提出了请求：不许送走，帮他养着，放假了去看它！儿进了高中住校了，我又把小狗贝贝领进了门，这下家中花花草草加小狗一样都不缺了！','2019.10.18','0.jpg','user_0.jpg');