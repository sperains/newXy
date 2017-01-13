
import React , {Component} from 'react';
import './ActiveEditForm.scss';
import {DatePicker , TimePicker , Tag , Input , Tooltip, Button} from 'antd';

export default class ActiveEditForm extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="active-edit-form">
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">主题<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
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
						<input />16/16
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">外链<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">人数限定<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">预到意向<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">地址<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
					</div>
				</div>
			</div>
		)
	}	
}