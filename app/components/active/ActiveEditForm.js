
import React , {Component} from 'react';
import './ActiveEditForm.scss';
import {DatePicker , TimePicker , Tag , Input , Tooltip, Button} from 'antd';
import {EditableTagGroup } from '../widgets';

export default class ActiveEditForm extends Component{
	constructor(props) {
		super(props);
		this.state = {
			address : ''
		}
		this.mapInit = this.mapInit.bind(this);
		this.mapClickHandler = this.mapClickHandler.bind(this);
	}

	componentWillMount() {
		
	}

	componentDidMount() {
		this.mapInit();
	}

	// 初始化地图
	mapInit(){
		var me = this ;
		var map, geolocation;
			//加载地图，调用浏览器定位服务
			map = new AMap.Map('map', {
			resizeEnable: true,
			zoom : 12				
		});
		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
			function(){
				map.addControl(new AMap.ToolBar({}));
			}
		);
		let marker = new AMap.Marker({
			icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png"
		});
		marker.setMap(map);

		var clickEventListener = map.on('click', function(e){
			me.mapClickHandler(e , map , marker);
		});

	}

	// 处理地图点击
	mapClickHandler(e , map ,  marker){
		let me = this;
		// 设置锚点位置。
		marker.setPosition(e.lnglat);
		map.plugin(["AMap.Geocoder"], function () {
			var geocoder = new AMap.Geocoder({
				radius: 1000,
				extensions: "all"
			});  
			geocoder.getAddress(e.lnglat, function(status, result) {
				if (status === 'complete' && result.info === 'OK') {
					var address = result.regeocode.formattedAddress; //返回地址描述
					// me.props.setAddress(address , e.lnglat);
					// 设置地址
					me.setState({address})
				}
			});     
		});
	}

	render() {
		return (
			<div className="active-edit-form">
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">主题<span></span></div>
					<div className="active-edit-form-item-input">
						<input className="active-edit-form-item-input-title" />16/16
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">报名时间<span></span></div>
					<div className="active-edit-form-item-content">
						<DatePicker  style={{width : '260px'}} disabled={false}/>
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">活动时间<span></span></div>
					<div className="active-edit-form-item-content">
						<DatePicker /><TimePicker />
						至
						<DatePicker /><TimePicker />
					</div>
					
				</div>
				
				
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">分类标签<span></span></div>
					<div className="active-edit-form-item-input">
						<EditableTagGroup />
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">外链<span></span></div>
					<div className="active-edit-form-item-content">
						<input className="active-edit-form-item-content-input active-edit-form-item-content-outsite" placeholder="http://"/>
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">人数限定<span></span></div>
					<div className="active-edit-form-item-content">
						<div className="active-edit-form-item-content-checkbox"></div>
						<input className="active-edit-form-item-content-input active-edit-form-item-content-person-limit" />
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">预到意向<span></span></div>
					<div className="active-edit-form-item-content">
						<div className="active-edit-form-item-content-checkbox"></div>
						<input className="active-edit-form-item-content-input active-edit-form-item-content-intention" />
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">地址<span></span></div>
					<div className="active-edit-form-item-content">
						<input value={this.state.address} className="active-edit-form-item-content-input active-edit-form-item-content-address" />
					</div>
				</div>

				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label"><span></span></div>
					<div className="active-edit-form-item-content">
						<div className="active-edit-form-item-content-map map" id="map"/>
					</div>
				</div>


			</div>
		)
	}	
}