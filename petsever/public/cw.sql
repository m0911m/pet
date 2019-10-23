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
/**寄养家庭信息数据表**/
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
/**###########################**/
/**数据导入**/
/**用户信息**/
INSERT INTO cw_user VALUES
(null,'tom','12345678','13370358620','0','18','128800','工程师','西安'),
(null,'jack','12345678','13301234567','0','18','128800','工程师','北京');

/**宠物寄养信息导入**/
INSERT INTO cw_foster VALUES
(null,'快乐之家',45,'随时接单','西安市雁塔区',null,null);

/**宠物信息导入**/
INSERT INTO cw_animal VALUES
(null,2,"哈巴狗","3",true,"15","999_jpg"),
(null,2,"哈巴狗","3",true,"15","999_jpg"),
(null,2,"哈巴狗","3",true,"15","999_jpg");



/**首页故事信息导入**/
INSERT INTO cw_sindex VALUES
(null,'999','被姥姥带大的狗子','大长腿和小短腿','哈哈看到这个话题果断参与','从小就喜欢狗狗猫猫，花花草草的，自己定的底线是不管是啥，进了家门就要好好地对待！开始工作时一直住宿舍，也没这条件养狗呀猫的，还是住在平房的宿舍时，也曾在窗台上种过几盆花草，等待花苞绽开时，却在某一天下班回来不知所踪，也就没了养花的心情。等有了自己的家，一直就放任了自己种花的爱好，只是水平有限，花时有夭折，自我批评不断，一有机会还是会往家搬花。对于狗狗却从没下过要养的决心，谁知咱的儿，是一个在街上见了小鸡小鸭，特别是小狗就挪不了步的娃，这样小鸡小鸭小兔会不时进踞我的家，伤心过几次的儿子最后也同意了我的观点：再喜欢还是不买了，它们都是一条命！曾有那么一次，儿子在放学的路上决不挪步就为了一只在寒风中颤抖的小小狗，最终小狗进了我们的家，谁知它长成了满脸的胡子，儿也不小，没法就把不喜欢狗的爷爷奶奶也扯了进来：寄养到住在乡下的爷爷家了，一有空就去乡下看它，而长得不小的它一见儿子去热情得一步不离！两位老人却因为疼孙子从此对狗也有了一份爱好，某一天狗狗失踪了，他们还伤心了许久。嫂子比我更爱好狗狗猫猫，家中也一直养着，而我和儿子一有了想狗的念头就回娘家玩。更进一步的办法就是趁儿子寒暑期时，如果嫂子家的小狗出生还未送人就抱来家养上一个假期，开学前送回，就这样陆陆续续的白色的小京巴，黄色的小博美让儿子的爱心有了施展的空间。每次送走都是一个舍不得，特别是对一只小博美西西，对舅妈提出了请求：不许送走，帮他养着，放假了去看它！儿进了高中住校了，我又把小狗贝贝领进了门，这下家中花花草草加小狗一样都不缺了！','2019.10.18','0.jpg','user_0.jpg'),
(null,'1000','唯一一份礼物，也是最后一次','猫窝猫咪幼儿园','记那只被我遗弃的奶牛咪咪','三年前我家猫丢了，因为是夏天，窗户开了个小缝，很小很小一条缝，外面还有层护栏和纱窗，我家胆子超小的猫咪竟然就这么离家出走了。然后我和男朋友就开始了为期两个月的寻猫之路。两个月内，我们把方圆2公里内的小区全贴上了寻猫启事，还花钱在附近的小蹦蹦上投放寻猫广告。每天轮流或一起带着我家狗出去地毯式扫荡一遍。家里阳台上放了大铁笼子做好陷阱，每天装新鲜猫粮，安上红外摄像头每夜录像监控。很快，小区里的流浪猫几乎就被我们的陷阱抓了个遍，除了我家猫咪，还有我要说的这只奶牛。话说我注意到奶牛是喂了半个月的流浪猫之后了，因为每天喂，很快就跟小区里的流浪猫打成了一片，附近的流浪猫都认了个全。只是每次喂猫都有只神秘人物，吃的特多但是从不露面。一开始是在小区的南边发现的，最南边的平房跟院墙之间有条夹缝，两边都封死了，只有比较大的排水孔。我们每天都在排水孔外面摆上猫粮和肉肉，等着猫咪来吃。吃完以后总是剩很多，我们就去北边继续喂，等喂完回来南边就一点儿不剩了。有一天我们等猫咪吃完以后躲在不远处观察，发现排水洞里很快伸出只肉爪，飞快地把猫粮和肉肉拨进去。连着好几天，这只罪恶的爪子都在人一消失以后立刻出现，而且据观察神秘猫咪只有这一只！勾搭了好几天无果，于是我们也不强求了。北边是个车棚，没有南边那么隐蔽，缺点是不便于人类藏身及观察。但是经过楼主不懈努力，终于在某个月黑风高的夜晚堵住了神秘猫咪！虽然只看到了背部，但是据我长期观察猫咪的敏锐视力，还是一眼就根据爪子认出了这就是南边哪只神秘猫咪！当时我就囧了，每天我喂完南边紧接着就来北边，它每次都抓紧时间吃完南边的又来北边接着吃，每天吃的量相当于三只普通流浪猫！！不过看到它硕大的背影和毛绒绒的大尾巴，我很能理解它的食量。。。因其肥硕的身材和黑白相间的毛色，我们给它起了代号叫“奶牛”。经过一段时间的观察，我和男朋友都一致承认，奶牛是我们见过的最聪明最警觉的流浪猫。它每天吃的最多，但是从不露面，我们装着美妙食物的陷阱也从不上钩。即使好几次的食物都是楼主买的新鲜小黄鱼煮的连鱼带汤，一百米外都能闻到鱼汤的香味，甚至还抓到过一只品相上佳的纯种蓝猫。时间长了，我们都对奶牛心怀敬畏，每次特意给它多留些吃的，并且将其视为流浪猫界的国王。直到有一天，我俩突发兴起，决定带着我家金毛一起堵截一次奶牛国王。就在我们三面包围将奶牛团团围住的时候，楼主兴奋的都不敢相信这是真的。但是奶牛又给了我们一个意外，它没有逃跑，虽然对猫咪而言这很容易。奶牛十分淡定地无视了我家金毛，径直走到我的面前，开始卖萌。这是我第一次看清了奶牛的长相（内牛满面），原来它是这么美丽的一只三花，原来它强悍的外表下是这么萝莉的内心，原来它硕大的身材能发出这么细而嗲的叫声。。。 此役之后，楼主彻底瓦解了奶牛女王的防线。每天我出去喂猫的时候，奶牛都像狗狗一样跟在我脚边，光明正大地吃三猫份的粮，并且无视我家金毛的存在。 但是好景不长，旁边的小区开始盖楼，据说那些农民工会抓猫咪去吃。我不知道是真是假，但是小区的流浪猫在日渐减少。随着流浪猫的减少和我家猫咪找到的希望越来越渺茫，再加上我男友准备出国越来越多事要做。金毛送了人，我喂猫的次数开始减少，直到连着好久没有见到奶牛，我也不知道什么会搬走，就很少去喂猫咪了。 ','2019.10.18','0.jpg','user_0.jpg'),
(null,'1001','世界这么大我想带你去看看','八喜幺鸡的家','安徽宣城月牙湾','','2019.10.18','0.jpg','user_0.jpg');