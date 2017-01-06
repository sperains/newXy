import React  , {Component}  from 'react' ;
import { Menu, Icon , Switch  } from 'antd';
import './sider.scss';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class Sider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current : '0' ,
			openKeys : [],
			collapse : false ,
			menuList : [
			{ 
				title : '正念训练'  , 
				isOpen : true ,
				menuList : [
					{
						title : '正念训练营',
						icon : '',
					},
					{
						title : '正念训练营',
						icon : ''
					}
				]
			},
			{ 
				title : '正念训练'  , 
				isOpen : false ,
				menuList : [
					{
						title : '正念训练营',
					},
					{
						title : '正念训练营',
					}
				]
			}
		]
		}
		this.onMenuSelect = this.onMenuSelect.bind(this);
	}

	onMenuSelect( menu , index){
		console.log(menu , index);
		let menuList = this.state.menuList;
		menuList.forEach( (menu , i)=>{
			if(index == i){
				menu.isOpen = true ;
			}else{
				menu.isOpen = false;
			}
		} )
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
	      						<li key={index} className="menu-item">
			      					<div className="menu-item-title" onClick={()=>this.onMenuSelect(menu , index)}>
			      						<div className={menu.isOpen ? 'arrow-icon arrow-icon-open' : 'arrow-icon'}></div>
			      						<span className="">正念训练</span>
			      					</div>
			      					{
			      						<ul className={menu.isOpen ? 'menu-item-sublist' : 'menu-item-sublist menu-item-sublist-hidden'}>
				      						{
				      							menu.menuList.map( (subMenu , subIndex)=>(
					      							<li key={subIndex} className="menu-item-sub">
					      								<div className="menu-icon" style={{backgroundPosition: 'left ' +  -subIndex*22 + 'px' }}></div>
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