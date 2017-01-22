
import React , {Component} from 'react';
import './ActiveItem.scss';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';

class ActiveItem extends Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}


	onEditClick(index){
		this.props.dispatch({type : 'GET_CURRENT_ACTIVITY' , index : index})
		hashHistory.push("/active/edit");
	}

	onDetailClick(index){
		this.props.dispatch({type : 'GET_CURRENT_ACTIVITY' , index : index})
		hashHistory.push("/active/enroll-list");
	}

	onDeleteClick(index){
		this.props.dispatch({type : 'DELETE_ACTIVITY' , index : index})
	}

	onReleaseStateChange(index){
		this.props.dispatch({type : 'ACTIVITY_RELEASE_STATE_CHANGE' , index : index })
	}

	

	render() {
		const {canDelete  , activeInfo , activeIndex , releaseStateChange  } = this.props;
		return (
			<div className="active-item">
				<div className="active-item-left">
					<div className="active-item-left-top">
					{activeIndex + 1}<span className="active-title">{activeInfo.title}</span>
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
						<div onClick={()=>this.onReleaseStateChange(activeIndex)} className={activeInfo.release ? "active-release-btn active-release-btn-open" : 'active-release-btn'}></div>
						{canDelete ? (<div onClick={()=>this.onDeleteClick(activeIndex)} className="active-delete-btn"></div>) : ''}
					</div>
					<div className="active-item-right-center">
						{activeInfo.isOpenLimit ?  '(' + activeInfo.personCount +'/' +  activeInfo.activeLimit + ")"   : '' } <span onClick={()=>this.onDetailClick(activeIndex)}>报名详情</span>
					</div>
					<div className="active-item-right-bottom">
						<span onClick={ ()=>this.onEditClick(activeIndex)}>编辑</span>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(ActiveItem);