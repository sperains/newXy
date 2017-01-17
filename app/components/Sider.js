import React  , {Component}  from 'react' ;
import { Menu, Icon , Switch  } from 'antd';
import './Sider.scss';
import {hashHistory} from 'react-router';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class Sider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current : '0' ,
			openKeys : [],
			collapse : false ,
			openKey : 0 ,
			menuList : [
			{ 
				title : '正念训练'  , 
				active : true ,
				menuList : [
					{
						title : '正念训练项',
						icon : 'test1',
						active : true,
						router : 'train'
					}
				]
			},
			{ 
				title : '喜悦活动'  , 
				active : false ,
				menuList : [
					{
						title : '喜悦活动项',
						icon : 'test2',
						active : true,
						router : 'active'
					}
				]
			},
			{ 
				title : '生命数字'  , 
				active : false ,
				menuList : [
					{
						title : '生命数字项',
						icon : 'test2',
						active : true,
						router : 'number'
					}
				]
			}
		]
		}
		this.onMenuSelect = this.onMenuSelect.bind(this);
		this.onSubMenuClick = this.onSubMenuClick.bind(this);
	}


	componentDidMount() {
		
	}

	// 点击主菜单
	onMenuSelect( menu , index){
		// console.log(menu , index);
		let menuList = this.state.menuList;
		// 如果点击的是当前展开的菜单则不做操作;
		if(this.state.openKey == index){
			// menuList[index].active = !menuList[index].active;
			// this.setState({menuList});
			return ;
		}

		let openKey ;
		menuList.forEach( (menu , i)=>{
			if(index == i){
				menu.active = true ;
				openKey = index;
				menu.menuList.forEach( (subMenu , subIndex)=>{
					if(subIndex == 0 ){
						subMenu.active = true;
						hashHistory.push('/' + subMenu.router)
					}else{
						subMenu.active = false;
					}
				})
			}else{
				menu.active = false;
			}
		} )
		this.setState({menuList , openKey});
	}

	onSubMenuClick(subMenu , subIndex){
		// console.log(menu , index , subMenu , subIndex);
		let menuList = this.state.menuList;
		menuList.forEach( (menu , i )=>{
			menu.menuList.forEach((subMenu , subI)=>{
				if(subIndex == subI){
					subMenu.active = true;
				}else{
					subMenu.active = false;
				}
			})
		})
		this.setState({menuList});

	}



	render() {
	    return (
	      <div className="sider-wrap" style={{ width : this.state.collapse ? '40px' : '240px' }}>
	      		<div className="collapse-wrap" >
	      			<div className="collapse-wrap-img"></div>
	      		</div>
	      		<div className="menu-wrap">
	      			<ul className="menu-list">
	      			{
	      				this.state.menuList.map( (menu,index) =>{
	      					return (
	      						<li key={index} className='menu-item' style={{height : menu.active ? (menu.menuList.length+1) * 50 + 'px' : '50px'}}>
			      					<div className="menu-item-title" onClick={()=>this.onMenuSelect(menu , index)}>
			      						<div className={menu.active ? 'arrow-icon arrow-icon-open' : 'arrow-icon'}></div>
			      						<span className="">{menu.title}</span>
			      					</div>
			      					{
			      						<ul ref="menu_ul" className= 'menu-item-sublist'>
				      						{
				      							menu.menuList.map( (subMenu , subIndex)=>(
					      							<li key={subIndex} 
					      							className={subMenu.active ? 'menu-item-sub menu-item-sub-active' : 'menu-item-sub'}
					      							onClick={()=>this.onSubMenuClick(subMenu , subIndex)}
					      							>
					      								<div className={"menu-icon " + (subMenu.active ? subMenu.icon+'-active' : subMenu.icon)} ></div>
					      								<span className="menu-item-sub-title">{subMenu.title}</span>
					      							</li>
				      							)) 
				      						}
			      						</ul>
			      					}
			      				</li>
	      					)
	      				})
	      			}
	      			</ul>



	      			
	      		</div>
	      </div>
	    );
	  }





}