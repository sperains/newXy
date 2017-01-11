
import React , {Component} from 'react';
import './ActiveItem.scss';

export default class ActiveItem extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="active-item">
				<div className="active-item-left">
					<div className="active-item-left-top">
					1<span className="active-title">喜悦活动冬季体验课</span>
					</div>
					<div className="active-item-left-bottom">
						<div className="active-image"></div>
						<div className="active-detail">
							<span>报名结束时间：2016-12-24</span>
							<span>活动地点：湖北省武汉市巴拉巴拉</span>
							<span>活动时间：2016-12-26 08:00至2016-12-28</span>
						</div>
					</div>
				</div>
				<div className="active-item-right">
					<div className="active-item-right-top">
						<span className="active-createTime">创建时间：2016-12-23 09:45</span>
						<div className="active-release-btn"></div>
					</div>
					<div className="active-item-right-center">
						( 17 / 30 ) <span>报名详情</span>
					</div>
					<div className="active-item-right-bottom">
						<span>编辑</span>
					</div>
				</div>
			</div>
		)
	}
}