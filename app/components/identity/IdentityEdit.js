
import React , {Component} from 'react';
import './IdentityEdit.scss';
import {ContentWithBackNav} from '../widgets';
import {IdentityEditForm} from './';

export default class IdentityEdit extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="identity-edit-wrap">
				<ContentWithBackNav 
					prev="职级管理"
					current="新建职位"
					btnOpts={[{text :'保存',onClick:()=>{console.log('new identity')}}]}
				/>
				<div className="identity-edit-content">
					<IdentityEditForm />
				</div>
			</div>
		)
	}
}