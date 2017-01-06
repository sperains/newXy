
import React , {Component} from 'react';
import { Badge ,Icon ,Menu, Dropdown ,message } from 'antd';
import './topbar.scss';

const MenuItem = Menu.Item

const onMenuItemClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
			<Menu onClick={onMenuItemClick}>
				<Menu.Item key="setting" >
					<span >设置</span>
				</Menu.Item>
				<Menu.Item key="usercenter">
				个人中心
				</Menu.Item>
				<Menu.Item key="logout">
				注销
				</Menu.Item>
			</Menu>
		);




export default class TopBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messageCount : 5 
		}
		this.onMessageClick = this.onMessageClick.bind(this);
		// this.onMenuItemClick = this.onMenuItemClick.bind(this);
	}

	onMessageClick(){
		this.setState({
			messageCount : ++this.state.messageCount
		});
	}

	

	render(){

		return (
				<div className="topbar"> 
					<div className="topbar-logo">
						<span className="topbar-logo-big">喜悦</span>
						<span className="topbar-logo-normal">后台管理</span>
					</div>

					<div className="topbar-nav">
						<span className="topbar-nav-username">Admin</span>
						<div className="topbar-nav-logout">
							<span>注销</span>
							<div className="logout-img"></div>
						</div>
						
					</div>
				</div>
			)
	}
}