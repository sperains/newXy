
import React , {Component} from 'react';
import './ActiveEdit.scss';
import {ContentWithBackNav , ImageUpload} from '../widgets';
import ActiveEditForm from './ActiveEditForm';
import {hashHistory} from 'react-router';

export default class ActiveEdit extends Component{
	constructor(props) {
		super(props);
		this.state = {
			imageUrl : ''
		}
		this.onSaveClick = this.onSaveClick.bind(this);
		this.onImageChange = this.onImageChange.bind(this);
		this.onBackClick = this.onBackClick.bind(this);
	}

	onBackClick(){
		hashHistory.push("/active");
	}

	onSaveClick(){
		console.log('save');
	}

	onImageChange(e){
		let me = this;
		let file = e.target.files[0];
		// console.log(file);
		// let imageUrl = 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg';
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(){
			let imageUrl=reader.result;
			me.setState({imageUrl})
		}
		
	}
	render() {
		return (
			<div className="active-edit">
				<ContentWithBackNav 
					prev='喜悦活动项'
					onBack={this.onBackClick}
					current='添加活动'
					btnOpts={
						[
							{ text : '保存' , onClick : this.onSaveClick}
						]
					}
				/>
				<div className="active-edit-content">
					<ImageUpload 
					style={{marginBottom : '16px'}} 
					onChange={this.onImageChange} 
					imageUrl={this.state.imageUrl}
					/>
					<ActiveEditForm />
				</div>
				

			</div>
		)
	}	
}