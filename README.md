项目文档
Github仓库地址：https://github.com/m0911m/pet.git
新浪云域名：
 app：   http://gaoxinweb1906.applinzi.com
服务器：http://gaoxinweb1906.applinzi.com
前端功能及分工
前端功能
首先在主页中添加查看有寄养家庭的列表还可以在搜索框中按条件查找较为精确的查找寄养家庭.在寄养家庭列表中可以选择适合自己的寄养家庭，主页还有精选的用户与宠物之间有趣故事。发现页这里可以查看更多宠物的照片以及与用户的有趣的故事.发布页可以自己发布比较有趣的事情.添加宠物信息做好前端数据的查询、更新、删除、提交.服务页可以查看到自己得订单，自己发布的动态，最后点击退出按钮可注销session退出登录。
分工
曹慧敏负责写宠物信息模块等.如添加宠物信息.删除宠物信息.张悦负责社交模块的编写,如发布动态.查看动态等功能.喻鑫负责编写后台及数据库.康光辉负责完成宠物之家模块的查询.搜索以及宠物寄养的交易模块

数据表
一、用户信息表 cw_user
uid(用户id)	int	主键自增
user_img(用户头像)	varchar(128)	
uname (用户名)	varchar(30)	
usex(用户性别)	bool	
uage(用户年龄)	int	
uconstellation(星座)	bigint	
ujob(职位)	varchar(30)	
uadderss(地址)	varchar(30)	
二、宠物信息表cw_animal
aid(宠物id)	int	主键自增
uid(用户名)	int	
animal_img(宠物头像)	varchar(128)	
animal_type(宠物类型)	varchar(30)	
animal_age(宠物年纪)	varchar(30)	
animal_sex(宠物性别)	bool	
animal_weight(宠物体重)	varchar(30)	
三、发布动态内容表cw_text
tid	int	主键自增
ttitle(主标题)	varchar(30)	
tsmtitle(小标题)	varchar(30)	
uname(用户昵称)	varchar(30)	
ttxt(正文)	varchar(128)	
t_img	varchar(128)	
uid	int	
四、寄养信息数据表cw_foster
fid	int	主键自增
ftitle(宠物家名)	varchar(30)	
fprice(价格)	varchar(30)	
fisonbuy(是否接单)	varcahr(30)	
fscore(价格)	varchar(30)	
faddress(地址)	varchar(30)	
f_img(背景图片)	varchar(128)	
uid(商家uid)	int	
五、首页故事数据表 cw_sindex
iid	int	主键自增
uid(用户id)	int	
ititle(主标题)	varchar(30)	
uname(用户昵称)	varchar(30)	
ismtitle(小标题)	varchar(30)	
itxt(正文)	TEXT	
i_img(图片)	varchar(128)	
i_icon	varchar(128)	
六、轮播组件数据表 cw_indexlunbo
id	int	主键自增
luobo_url(轮播图地址)	varchar(30	
七、购物车信息数据表cw_cart
cid	int	主键自增
fid(商品id)	int	
ftitle(宠物之家的名字)	varchar(30)	
fprice(价格)	varchar(30)	
uid(用户id)	int	
f_img(图片)	varchar(30)	




api

user/login   post
用户登录
user/isreg   get
判断用户名是否被注册过
user/reg    post
用户注册
user/updatapetmessage  post
添加宠物信息
user/delpetmessage    get
删除宠物信息
user/selectpetmessage  get
查询宠物信息
news/updatamessagelist  post
发布动态
news/messagelist     get
查询动态页信息
news/ indexstory    get
获取首页故事
news/selectlunbo    get
轮播图接口
news/ detailstory    get
首页故事详情页
foster/fosterlist     get
寄养家庭列表
foster/fosterhome   get
寄养家庭详情页
foster/searchhome  get
模糊查找家庭     get
foster/addcart     get
添加寄养家庭到购物车
foster/selectcart    get
查询购物车
foster/delcart  get
删除购物车
user/close
注销session

