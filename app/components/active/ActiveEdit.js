
import React , {Component} from 'react';
import './ActiveEdit.scss';
import {ContentWithBackNav} from '../widgets/index';
import ActiveEditForm from './ActiveEditForm';

export default class ActiveEdit extends Component{
	constructor(props) {
		super(props);
		this.onSaveClick = this.onSaveClick.bind(this);
	}

	onSaveClick(){
		console.log('save');
	}

	render() {
		return (
			<div className="active-edit-wrap">
				<ContentWithBackNav 
					prev='喜悦活动项'
					current='添加活动'
					btnOpts={
						[
							{ text : '保存' , onClick : this.onSaveClick}
						]
					}
				/>
				<ActiveEditForm />

			</div>
		)
	}	
}