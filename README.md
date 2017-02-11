
### 运行
clone项目代码到本地.
进入项目根目录,执行npm install 安装项目所需的js包
在webpack.config.js 修改localHost为本地ip
运行npm run server 启动本地测试服务器.


## <Center>喜悦后台文档
@(作者:Rains)[编写时间:2017-01-29|React] 

[TOC]
####项目简介
该项目主要用于喜悦后台数据的管理与创建,其中包括:正念训练、喜悦活动、生命数字、会员管理、能量管理、捐赠管理、问卷管理、职级管理等.
该项目主要涉及以下技术:
**Reactjs**	 用于构建用户界面的javascript框架. 详情查看[Reactjs官网](https://facebook.github.io/react/).
**React-router** React路由组件.详情查看[React-router中文教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu)
**Redux** javascript状态容器,提供可预测化的状态管理.详情查看[Redux中文教程](http://www.redux.org.cn/)
**webpack** Javascript模块加载器兼app打包工具 .详情查看[Webpack官网](http://webpack.github.io/)
**npm** Javascript包管理工具,需要nodejs支持.详情查看[npm官网](https://www.npmjs.com/)
**nodejs** 基于Chrome v8引擎的Javascript运行时环境,详情查看[Nodejs官网](https://nodejs.org/en/)

在该项目中使用的地图定位为高德地图.详情查看[高德地图Api](http://lbs.amap.com/)


#### 项目整体结构
```javascript
xy 			            -项目所在文件夹 
	app                 -项目源码目录
	node_modules        -javascrpt模块目录
	template            -首页 index.html模板
	index.html          -项目主页
	package.json        -npm配置文件
	webpack.config.js   -webpack配置文件(调试)
	webpack.production.config.js  -webpack配置文件(发布)
```

#### 源码目录介绍
```javascript
app 
	components  项目组件存放目录
		active        -喜悦活动模块相关组件目录
		donation      -喜悦捐赠模块相关组件目录
		energy        -能量管理模块相关组件目录
		feedback      -问卷反馈模块相关组件目录
		identity      -职级管理模块相关组件目录
		member        -会员管理模块相关组件目录
		number        -生命数字模块相关组件目录
		training      -正念训练模块相关组件目录
		widgets       -存放可复用小组件的目录
		Sider.js      -左侧导航菜单模块
		Sider.scss    -导航菜单模块对应的css样式文件
		TopBar.js     -顶部菜单模块
		TopBar.scss   -顶部菜单对应的css样式文件
	constants     -用于存放app常量的目录
	containers    -项目容器目录
	middleware    -用于存放项目中间件的目录
	reducers      -reducer存放目录
	resources     -项目资源文件目录
	utils         -存放自定义工具文件
	entry.js      -项目入口文件
	store.js      -项目store
```
##### 模块之间的跳转
模块之间的跳转通过`React-router`提供的`hashHistory`对象实现
```javascript
hashHistory.push('/identity/new' );
```
以上代码表示跳转到  `新建职级` 界面.详情参考React-router文档.

#### 项目模块划分
![Alt text](./1485413286509.png)
如上图所示,该项目主页面分为三大区域:
**顶部工具栏**: 包含项目logo,用户登录信息入口,注销等.
**左侧菜单栏**: 一个可折叠的导航菜单栏.
**右侧内容区**:用于显示各个模块内容的区域.

#### 项目主要文件介绍
##### Main.js
Main.js,位于项目源码的containers目录
Main.js 属于一个容器组件,它包含了项目主页中的三大区域的内容.
下面代码为Main容器的Html结构,其中包含了TopBar(顶部导航条)、Sider(左侧菜单导航栏)
`{this.props.children}`会根据路由状态的切换在右侧内容区域显示相应的模块.
```javascript
<div className="wrap">    
	<TopBar />
    <div className="content">
        <Sider />
        <div className="right-wrap" id="right-wrap">
           {this.props.children}
        </div>
    </div>
</div> 
```
##### entry.js
entry.js位于源码app目录
该文件是项目的入口文件.项目启动时会首先进入该文件.
`Router`是React中路由组件.它会根据以下代码中定义的规则进行组件匹配.
例如,当用户访问`/train`时，会先加载`Main`组件，然后在它的内部再加载`Training`组件。

具体代码如下:
```javascript
ReactDOM.render(
   <Provider store={store}>
   	<Router history={hashHistory}>
  		<Route  path="/" component={Main}>
          <Route path="" component={Training} />
		  <Route path="/train" component={Training}/>
	      <Route path="/active" component={Active} />
          <Route path="/active/enroll-list" component={ActiveEnrollList} />
    	  <Route path="/active/:type" component={ActiveEdit} />
          <Route path="/train-edit" component={TraningItemEdit} />
          <Route path="/number" component={Number} />
          <Route path="/member" component={Member} />
          <Route path="/energy-rule" component={EnergyRule} />
          <Route path="/energy-rule/edit" component={EnergyRuleEdit} />
          <Route path="/energy-rank" component={EnergyRank} />
          <Route path="/identity" component={Identity} />
          <Route path="/identity/:type" component={IdentityEdit} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/donation" component={Donation} />
    	</Route>
    </Router>
   </Provider>,
    root
);
```

#### 项目各模块介绍
该项目中各模块(例如喜悦活动)都是由一个或者多个小模块组成.
每个小模块都会有一个对应css样式文件.
在各模块目录下都有一个`index.js`文件,该文件是为了整合目录下的组件,并进行统一导出.

##### 喜悦活动
![Alt text](https://github.com/sperains/newXy/tree/master/sceens/853ad13a-5809-4101-a09d-cc34845d8e6d.png)
该模块目录如下
```javascript
active
	Active.js            --喜悦活动模块入口文件.
	Active.scss         
	ActiveEdit.js        --喜悦活动编辑模块
	ActiveEdit.scss
	ActiveEditForm.js    --喜悦活动编辑模块的表单内容模块.
	ActiveEditForm.scss
	ActiveEnrollList.js  --活动报名详情模块
	ActiveEnrollList.scss
	ActiveItem.js        --喜悦活动项模块
	ActiveItem.scss
	ActiveList.js        --喜悦活动列表模块
	ActiveList.scss
	index.js
```
active模块的层级关系如下
```javascript
<Active>
	<ContentNav />
	<ActiveList>
		<ActiveItem />
	</ActiveList>
</Active>
```
其中`ContentNav`是一个通用的自定义组件。其在界面种显示以下内容。
![Alt text](./1485581125376.png)
组件左侧为当前模块名称，右侧是一组功能按钮。
`ContentNav`有两个可配置的属性
-**title**  		模块名称。
-**btnOpts**    一个btnOpt对象数组。
`btnOpt`对象结构如下：
```javascript
	btnOpts : {
		text : 'string'         --按钮显示文字，
		onClick : function(){}  --按钮点击事件
	}
```
`ActiveList`种包含一个或多个`ActiveItem`组件，`ActiveList`组件负责获取活动信息数据，并将其传递给`ActiveItem`组件
`ActiveItem`负责每条活动的信息展示，其在页面显示如下：
![Alt text](./1485581679288.png)
`ActiveItem`有以下属性
-**canDelete**       true|false  当前活动是否可删除的标识，
-**activeInfo**	      用于存储当前活动信息的对象。
-**activeIndex** 	  当前活动在数组中的下标。

`ActiveEnrollList`为活动报名详情页面,该页面的层级关系如下
```javascript
<ActiveEnrollList>
	<ContentWithBackNav />
	<CustomTable />
</ActiveEnrollList>
```
`ContentWithBackNav`是一个带有返回按钮的顶部导航栏,它有以下可配置属性
-**prev**			--父级模块名称。
-**current**     --当前模块名称
-**btnOpts**    --按钮配置对象数组。
-**onBack**     --返回按钮处理事件

`CustomTable`为自定义列表组件，其配置属性如下：
-**columns**      --表格表头数组，详情参考Antd Table组件[antd官网](https://ant.design/docs/react/introduce-cn)
-**dataSource** --数据源
-**scroll**          --滚动设置,格式  { x : num ， y ： num}


##### 正念训练
正念训练界面如下:
![Alt text](./1485585634596.png)
该模块目录如下：
```
training 
	index.js
	Training.js              --正念训练模块入口文件
	Training.scss            
	TrainingItem.js          --正念训练项模块
	TrainingItem.scss     
	TrainingItemEdit.js      --正念训练编辑模块
	TrainingItemEdit.scss
```
`Training`的层级关系如下
```javascript
	<Training>
		<ContentNav />
		<div>
			<TrainingItem />
			<TrainingItem />
			<TrainingItem />
		</div>
	</Training>
```
`TrainingItem`组件在页面中显示如下所示:
![Alt text](./1485584099132.png)
`TrainingItem`有以下配置项
-**title**   				 string --当前训练项主题
-**onEditClick**        function(){}   编辑按钮点击事件  
-**onDeleteClick**    function(){}   删除按钮点击事件
-**items**				 item 数组,当前训练项中的信息显示状态
item数据结构如下:
```
 item : {
	 title : string,   名称,例如:'主题','描述'
	 active : num      是否开启  1:开启,0:不开启
 }
```
##### 生命数字
![Alt text](./1485585567387.png)
该模块目录如下:
```javascript
number
	BabyNumber.js           -- 喜宝数字模块
	BabyNumber.scss
	FateNumber.js           --命运数模块
	FateNumber.scss
	index.js   
	Number.js               --生命数字模块入口文件
	Number.scss
	NumberContent.js        --生命数字内容区
	NumberContent.scss
	NumberDesc.js           --生命数字简介模块
	NumberDesc.scss
	NumberOverview.js       --生命数字概述模块
	NumberOverview.scss
	TalentNumber.js         --天赋数模块
	TalentNumber.scss
```
该模块有三部分构成顶部导航栏`ContentNav`,Tab切换栏以及内容详情区.代码如下:
```
<div className="number-wrap">
	<ContentNav title="生命数字项"/>
		<div className="number-content-wrap">
			<div className="number-tab">
				{
					this.state.tabs.map( (tab, index)=>
					(<span 
						key={index} 
						onClick={()=>this.onTabChange(tab,index)}
						className={tab.active? "number-tab-item number-tab-item-active" : "number-tab-item" }>{tab.title}
					</span>))
				}
			</div>
			<div className="number-detail">
				{currentEl}
			</div>
		</div>
		
	</div>
```
当点击Tab时内容区会显示对应的内容.
```
onTabChange(tab, index){
	let tabs = this.state.tabs;
	tabs.forEach( (tab, i)=>{
		if(index == i){
			tab.active=true;
		}else{
			tab.active=false;
		}
	})
	this.setState({
		tabs : tabs,
		currentTabIndex : index
	})
}
```
`state`中的`currentTabIndex`代表当前点击的tab下表,`CurrentTabIndex`改变会在内容区显示对应的模块.
```javascript
let currentEl ;
switch(this.state.currentTabIndex){
	case 0 : currentEl = <NumberDesc />;break;
	case 1 : currentEl = <BabyNumber />;break;
	case 2 : currentEl = <FateNumber />;break;
	case 3 : currentEl = <TalentNumber />;break;
}
```
`FateNumber`以及`TalentNumber`中都包含两部分,`生命数字内容区`以及`数字切换条`.代码如下
```javascript
<div className="fate-number-wrap">
	<span onClick={()=>this.onNewDetailClick()} className="fate-number-new">添加详解</span>
	<NumberContent currentNum={this.state.currentNum} />
	<div className="fate-number-footer">
		{
			[1,2,3,4,5,6,7,8,9].map( (num,index)=>{
				return (
					<span onClick={()=>this.onNumberChange(num)} className={num == this.state.currentNum ? 'active' : ''} key={index}>{num}</span>
				)
			})
		}
	</div>
</div>
```
##### 会员管理
![Alt text](./1485585667371.png)
该模块由`ContentNav`及`CustomTable`组成.各组件配置属性前面已有说明不再赘述.

##### 能量管理
能量规则界面如下
![Alt text](./1485676367393.png)
能量排名界面如下
![Alt text](./1485676910387.png)

该模块目录结构如下:
```javascript
energy
	EnergyRank.js          --能量排名模块
	EnergyRank.scss        
	EnergyRule.js          --能量规则模块
	EnergyRule.scss
	EnergyRuleEdit.js      --能量规则编辑模块
	EnergyRuleEdit.scss
	index.js
```
`EnergyRuleEdit`模块嵌套在`EnergyRule`模块中,通过`ruleEditDisplay`属性控制其显示/隐藏.

##### 职级管理
职级管理界面如下:
![Alt text](./1485677839112.png)
模块目录结构如下:
```javascript
identity
	Identity.js            --模块入口文件
	Identity.scss    
	IdentityEdit.js        --编辑职级模块
	IdentityEdit.scss
	IdentityEditForm.js    --职级编辑模块中表单模块
	IdentityEditForm.scss
	index.js
```
在该模块主页面点击新建按钮将跳转到`IdentityEdit`模块
`IdentityEdit`模块由`ContentWithBackNav`及`IdentityEditForm`模块组成.

##### 其他
`捐赠管理`及`问卷反馈`模块尚未开发.


