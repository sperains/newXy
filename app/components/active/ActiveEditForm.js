
import React , {Component} from 'react';
import './ActiveEditForm.scss';

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
					<div className="active-edit-form-item-label">活动时间<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
					</div>
				</div>
				<div className="active-edit-form-item">
					<div className="active-edit-form-item-label">报名时间<span></span></div>
					<div className="active-edit-form-item-input">
						<input />16/16
					</div>
				</div>
			</div>
		)
	}	
}