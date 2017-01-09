import React  , {Component}  from 'react' ;
import { Menu, Icon , Switch  } from 'antd';
import './Sider.scss';


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
						active : true
					},
					{
						title : '正念训练项',
						icon : 'test1',
						active : false
					},
				]
			},
			{ 
				title : '正念训练1'  , 
				active : false ,
				menuList : [
					{
						title : '正念训练营',
						icon : 'test2',
						active : true
					},
					{
						title : '正念训练营',
						icon : 'test2',
						active : false
					},
					{
						title : '正念训练营',
						icon : 'test2',
						active : false
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
		if(this.state.openKey == index){
			return ;
		}

		let menuList = this.state.menuList;
		let openKey ;
		menuList.forEach( (menu , i)=>{
			if(index == i){
				menu.active = true ;
				openKey = index;
				menu.menuList.forEach( (subMenu , subIndex)=>{
					if(subIndex == 0 ){
						subMenu.active = true;
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
	      		<div className="collapse-wrap">
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