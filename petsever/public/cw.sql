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
  animal_bir VARCHAR(30),#宠物年纪
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
  fscore VARCHAR(30),#评分
  fisonbuy VARCHAR(30),#是否接单
  f_length VARCHAR(30),#距离
  faddress VARCHAR(30),#寄养地址
  f_img VARCHAR(30),#背景图片
  f_uimg VARCHAR(30),#用户头像
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
/**宠物之家评论消息**/
CREATE TABLE cw_views(
    vid Int PRIMARY KEY AUTO_INCREMENT,
    uid Int,#评论人id
    iid Int,#要评论的动态id
    uname VARCHAR(30),#评论者昵称
    vcotnet TEXT, #评论
    vtime BIGINT,#发布时间
    vicon VARCHAR(128)#评论者头像
);

/**###########################**/
/**数据导入**/
/**用户信息**/
INSERT INTO cw_user VALUES
(null,'tom','12345678','13370358620','0','18','128800','工程师','西安'),
(null,'jack','12345678','13301234567','0','18','128800','工程师','北京');

/**宠物寄养信息导入**/
INSERT INTO cw_foster VALUES
(null,'快乐之家',45,'5','随时接单','0.3','狮城堡仔屋','fosterimg/family0.jpg','fosterimg/family_user1.jpg',null),
(null,'小福的家',36,'5','休息日接单','2.0','明德景园大厦','fosterimg/f1.jpg','fosterimg/fu1.jpg',null),
(null,'毛蛋的家',50,'5','随时接单','2.5','南郊铁路新村南二环','fosterimg/f2.jpg','fosterimg/fu2.jpg',null),
(null,'喵了个咪',40,'4.8','随时接单','2.5','南郊铁路新村东二环','fosterimg/f3.jpg','fosterimg/fu3.jpg',null);

/**宠物信息导入**/
INSERT INTO cw_animal VALUES
(null,2,"哈巴狗","2013-1-3",true,"15","999_jpg"),
(null,2,"哈巴狗","2013-2-3",true,"15","999_jpg"),
(null,2,"哈巴狗","2013-4-8",true,"15","999_jpg");



/**首页故事信息导入**/
INSERT INTO cw_sindex VALUES
(null,'999','被姥姥带大的狗子','大长腿和小短腿','哈哈看到这个话题果断参与','从小就喜欢狗狗猫猫，花花草草的，自己定的底线是不管是啥，进了家门就要好好地对待！开始工作时一直住宿舍，也没这条件养狗呀猫的，还是住在平房的宿舍时，也曾在窗台上种过几盆花草，等待花苞绽开时，却在某一天下班回来不知所踪，也就没了养花的心情。等有了自己的家，一直就放任了自己种花的爱好，只是水平有限，花时有夭折，自我批评不断，一有机会还是会往家搬花。对于狗狗却从没下过要养的决心，谁知咱的儿，是一个在街上见了小鸡小鸭，特别是小狗就挪不了步的娃，这样小鸡小鸭小兔会不时进踞我的家，伤心过几次的儿子最后也同意了我的观点：再喜欢还是不买了，它们都是一条命！曾有那么一次，儿子在放学的路上决不挪步就为了一只在寒风中颤抖的小小狗，最终小狗进了我们的家，谁知它长成了满脸的胡子，儿也不小，没法就把不喜欢狗的爷爷奶奶也扯了进来：寄养到住在乡下的爷爷家了，一有空就去乡下看它，而长得不小的它一见儿子去热情得一步不离！两位老人却因为疼孙子从此对狗也有了一份爱好，某一天狗狗失踪了，他们还伤心了许久。嫂子比我更爱好狗狗猫猫，家中也一直养着，而我和儿子一有了想狗的念头就回娘家玩。更进一步的办法就是趁儿子寒暑期时，如果嫂子家的小狗出生还未送人就抱来家养上一个假期，开学前送回，就这样陆陆续续的白色的小京巴，黄色的小博美让儿子的爱心有了施展的空间。每次送走都是一个舍不得，特别是对一只小博美西西，对舅妈提出了请求：不许送走，帮他养着，放假了去看它！儿进了高中住校了，我又把小狗贝贝领进了门，这下家中花花草草加小狗一样都不缺了！','2019.10.18','indexstoryimg/0.jpg','indexstoryimg/u0.jpg'),
(null,'1000','唯一一份礼物，也是最后一次','猫窝猫咪幼儿园','记那只被我遗弃的奶牛咪咪','三年前我家猫丢了，因为是夏天，窗户开了个小缝，很小很小一条缝，外面还有层护栏和纱窗，我家胆子超小的猫咪竟然就这么离家出走了。然后我和男朋友就开始了为期两个月的寻猫之路。两个月内，我们把方圆2公里内的小区全贴上了寻猫启事，还花钱在附近的小蹦蹦上投放寻猫广告。每天轮流或一起带着我家狗出去地毯式扫荡一遍。家里阳台上放了大铁笼子做好陷阱，每天装新鲜猫粮，安上红外摄像头每夜录像监控。很快，小区里的流浪猫几乎就被我们的陷阱抓了个遍，除了我家猫咪，还有我要说的这只奶牛。话说我注意到奶牛是喂了半个月的流浪猫之后了，因为每天喂，很快就跟小区里的流浪猫打成了一片，附近的流浪猫都认了个全。只是每次喂猫都有只神秘人物，吃的特多但是从不露面。一开始是在小区的南边发现的，最南边的平房跟院墙之间有条夹缝，两边都封死了，只有比较大的排水孔。我们每天都在排水孔外面摆上猫粮和肉肉，等着猫咪来吃。吃完以后总是剩很多，我们就去北边继续喂，等喂完回来南边就一点儿不剩了。有一天我们等猫咪吃完以后躲在不远处观察，发现排水洞里很快伸出只肉爪，飞快地把猫粮和肉肉拨进去。连着好几天，这只罪恶的爪子都在人一消失以后立刻出现，而且据观察神秘猫咪只有这一只！勾搭了好几天无果，于是我们也不强求了。北边是个车棚，没有南边那么隐蔽，缺点是不便于人类藏身及观察。但是经过楼主不懈努力，终于在某个月黑风高的夜晚堵住了神秘猫咪！虽然只看到了背部，但是据我长期观察猫咪的敏锐视力，还是一眼就根据爪子认出了这就是南边哪只神秘猫咪！当时我就囧了，每天我喂完南边紧接着就来北边，它每次都抓紧时间吃完南边的又来北边接着吃，每天吃的量相当于三只普通流浪猫！！不过看到它硕大的背影和毛绒绒的大尾巴，我很能理解它的食量。。。因其肥硕的身材和黑白相间的毛色，我们给它起了代号叫“奶牛”。经过一段时间的观察，我和男朋友都一致承认，奶牛是我们见过的最聪明最警觉的流浪猫。它每天吃的最多，但是从不露面，我们装着美妙食物的陷阱也从不上钩。即使好几次的食物都是楼主买的新鲜小黄鱼煮的连鱼带汤，一百米外都能闻到鱼汤的香味，甚至还抓到过一只品相上佳的纯种蓝猫。时间长了，我们都对奶牛心怀敬畏，每次特意给它多留些吃的，并且将其视为流浪猫界的国王。直到有一天，我俩突发兴起，决定带着我家金毛一起堵截一次奶牛国王。就在我们三面包围将奶牛团团围住的时候，楼主兴奋的都不敢相信这是真的。但是奶牛又给了我们一个意外，它没有逃跑，虽然对猫咪而言这很容易。奶牛十分淡定地无视了我家金毛，径直走到我的面前，开始卖萌。这是我第一次看清了奶牛的长相（内牛满面），原来它是这么美丽的一只三花，原来它强悍的外表下是这么萝莉的内心，原来它硕大的身材能发出这么细而嗲的叫声。。。 此役之后，楼主彻底瓦解了奶牛女王的防线。每天我出去喂猫的时候，奶牛都像狗狗一样跟在我脚边，光明正大地吃三猫份的粮，并且无视我家金毛的存在。 但是好景不长，旁边的小区开始盖楼，据说那些农民工会抓猫咪去吃。我不知道是真是假，但是小区的流浪猫在日渐减少。随着流浪猫的减少和我家猫咪找到的希望越来越渺茫，再加上我男友准备出国越来越多事要做。金毛送了人，我喂猫的次数开始减少，直到连着好久没有见到奶牛，我也不知道什么会搬走，就很少去喂猫咪了。 ','2019.10.18','indexstoryimg/1.jpg','indexstoryimg/u1.jpg'),
(null,'1001','世界这么大我想带你去看看','八喜幺鸡的家','安徽宣城月牙湾','哪有什么带猫去旅行的地方，只要你带它去了，所有的地方都适合，只要你肯踏上这段旅途。第一段是讲述，第二段是记录某次旅行。现在写这些，回忆起来都觉得真好，美好的旅途，有我的猫在身边。
当然啦出发前你得需要准备好多东西。首先自驾游得前提是车，提前让猫猫熟悉车内环境，第一次长途旅行前，我带着猫猫在车里住了一宿封堵住车里猫猫有可能爬进去得缝隙，尤其是司机位，钻到司机脚下危险可就大了。干粮零食，食碗水碗自不必说，零食带小包装一次能吃完得，方便保存，比如对于猫来说布丁就很合适如果去寒冷的地方记得带上车内用的小毯子，出门穿的小衣服，如果需要长时间在户外活动一定带些暖宝宝，可以贴在猫包里；盛夏去草长莺飞的地方，做好驱虫护理。住酒店是一件很需要说明的事情，既然带了猫猫出来又是自驾，就不要嫌麻烦了，多带东西。砂盆，车上，酒店，必需品。小扫帚，可以是扫床那种，也可以是扫桌面那种，用来打扫在酒店用砂盆后带出的砂子。床品，如果你不想晚上把你的毛孩子关在猫包里，不可避免的他们会上床，所以带好自己的床品是基本素质了。小毛巾，每次离开酒店我都会给毛孩子擦两遍毛，毕竟再豪华的酒店也是公共的。
透气，有观景窗的双肩猫包，便于一起外出活动。冬天小毯子暖宝宝，夏天猫宝的通风透气，足够的饮水。牵引绳！牵引绳！牵引绳！不要觉得猫咪胆小不会走远，任何万一都是不可挽回的。准备好就可以出发了~特意准备了车窗上的观景台后排成为专属睡榻噔噔噔噔~入住了~挑酒店时选允许宠物入住的酒店。做到保持酒店卫生外，也要注意自家猫猫的清洁。说白了，你嫌我猫弄脏你房间，我还嫌你房间不干净弄脏我猫呢我猫那么干净，天天自己给自己洗澡，用自己舌头和口水很费口水的说。我们自驾基本上一两天就换一个地方，习惯后，猫猫很喜欢探索每天不同的房间。这些地板窗台我都自己拿消毒水再擦过，我也是很辛苦，可是满足猫猫其实更多的是不喜欢陌生喧嚣的地方，所以去人多的地方我就把他们留在房间，注意一定要关好门窗，挂好请勿打扰等我牌子，叮嘱酒店屋内有猫不要开门。自驾会经常去人烟稀少的地方，草原，火山，雅丹，湖泊，这些地方戴好牵引绳，让猫猫出来看看他的天下吧！
几年前，我们从北京出发，一路向西，带着我们的两只猫咪，那时候三爷还小，看什么都好奇。途径入疆大通道检查站，检查员开后备箱，三爷兴冲冲的跳过去看，人家还拍拍三爷的小脑袋。现在写这些，回忆起来都觉得真好，美好的旅途，有我的猫在身边。
我们就住在这，按计划我们在车里露营，毕竟车里更暖和更安全。一起看日落。零下三度，两床羽绒被两床睡袋，温暖的小窝夜里，格外的宁静，月光洒遍水上雅丹，耳边是猫咪轻轻的呼噜声。清晨，睁开双眼，天地间仿佛只有我们。','2019.10.18','indexstoryimg/2.jpg','indexstoryimg/u2.jpg');


/*评论表信息*/
INSERT INTO cw_views VALUES
(null,'1','1','jack','好可爱','1572279619758','dog04.jpg'),
(null,'1','1','jack','好可爱','1572279619758','dog05.jpg'),
(null,'1','1','jack','好可爱','1572279619758','dog09.jpg'),
(null,'1','1','jack','好可爱','1572279619758','dog11.jpg'),
(null,'1','2','jack','乖宝宝','1572279619836','dog12.jpg');
/*动态信息表*/
INSERT INTO cw_text VALUES
(null,'寄养圈','这是肉嘟嘟的饺子女孩','Maoshu','北京北京市','一点也不安静，这张照片追了很久才拍到','dog09.jpg',1),
(null,'狗大王的生活','幸福生活','lyren离潘','上海上海市','巧克力1岁生日快乐','dog11.jpg',2),
(null,'每日一张宠物日常','希希的故事','Maoshu','北京北京市','天冷了，床上容易生猫','cat08.jpg',1),
(null,'宠物日常','颜值在线','kemei','湖北省武汉市','天天颜值都在线','dog12.jpg',3),
(null,'喵主子的日常','装扮大赛','索菲亚','陕西省西安市','哈哈，姐姐我用袜子给娃做了件小毛衣','cat20.jpeg',4),
(null,'寄养圈','噜噜的寄养故事','蛮吉玛妈','北京北京市','小噜噜最会卖萌了','dog24.jpg',5);