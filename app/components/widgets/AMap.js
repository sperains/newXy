
import React , {Component} from 'react';

export default class AMap extends Component{

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		var me = this ;
		var map, geolocation;
			//加载地图，调用浏览器定位服务
			map = new AMap.Map('map', {
			resizeEnable: true,
			zoom : 12
		});
		me.map = map ;
		me.geolocation = geolocation;

		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
			function(){
				map.addControl(new AMap.ToolBar({
				}));
		});
		
		//设置标记点
		let marker = new AMap.Marker({
			icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png"
		});
		marker.setMap(map);
		me.marker = marker;

		var clickEventListener = map.on('click', function(e) {

			marker.setPosition(e.lnglat);

			map.plugin(["AMap.Geocoder"], function () {
				var geocoder = new AMap.Geocoder({
					radius: 1000,
					extensions: "all"
				});  
				geocoder.getAddress(e.lnglat, function(status, result) {
					if (status === 'complete' && result.info === 'OK') {
						var address = result.regeocode.formattedAddress; //返回地址描述
						me.props.setAddress(address , e.lnglat);
					}
				});     
			});
		});
	}

	render() {
		return (
			<div className="map" id="map"></div>
		)
	}
}