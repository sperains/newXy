
import React , {Component} from 'react';
import './IdentityEdit.scss';
import {ContentWithBackNav} from '../widgets';
import {hashHistory} from 'react-router';
import {IdentityEditForm} from './';

export default class IdentityEdit extends Component{
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	onBackClick(){
		hashHistory.push('/identity');
	}

	render() {
		const editType = this.props.params.type;
		return (
			<div className="identity-edit-wrap">
				<ContentWithBackNav 
					prev="职级管理"
					current={ editType == 'new' ? "新建职位" : "编辑职位"}
					btnOpts={[{text :'保存',onClick:()=>{console.log('new identity')}}]}
					onBack={()=>this.onBackClick()}
				/>
				<div className="identity-edit-content">
					<IdentityEditForm />
				</div>
			</div>
		)
	}
}