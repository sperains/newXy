
import React , {Component} from 'react';
import './ActiveItem.scss';

export default class ActiveItem extends Component{
	constructor(props) {
		super(props);
		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		this.onResize()
		window.addEventListener('resize' , this.onResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize' , this.onResize);
	}

	onResize(){
		// console.log('.active-item:',$(".active-item").width());
		// $('.active-detail span').width($(".active-item").width() - 110 - 450)
	}

	render() {
		const {canDelete , onDetail ,  onDelete , activeInfo , activeNo , onReleaseStateChange} = this.props;

		return (
			<div className="active-item">
				<div className="active-item-left">
					<div className="active-item-left-top">
					{activeNo + 1}<span className="active-title">{activeInfo.title}</span>
					</div>
					<div className="active-item-left-bottom">
						<div className="active-image"></div>
						<div ref="active_detail" className="active-detail">
							<span className="active-detail-span">报名结束时间：2016-12-24</span>
							<span className="active-detail-span  text-overflow">活动地点：{activeInfo.address}</span>
							<span className="active-detail-span">活动时间：{activeInfo.startTime}至{activeInfo.endTime}</span>
						</div>
					</div>
				</div>
				<div className="active-item-right">
					<div className="active-item-right-top">
						<span className="active-createTime">创建时间：{activeInfo.createTime}</span>
						<div onClick={onReleaseStateChange} className={activeInfo.release ? "active-release-btn active-release-btn-open" : 'active-release-btn'}></div>
						{canDelete ? (<div onClick={onDelete} className="active-delete-btn"></div>) : ''}
					</div>
					<div className="active-item-right-center">
						{activeInfo.isOpenLimit ?  '(' + activeInfo.personCount +'/' +  activeInfo.activeLimit + ")"   : '' } <span onClick={onDetail}>报名详情</span>
					</div>
					<div className="active-item-right-bottom">
						<span>编辑</span>
					</div>
				</div>
			</div>
		)
	}
}