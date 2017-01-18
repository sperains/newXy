
import React , {Component} from 'react';
import './Member.scss';
import {ContentNav , CustomTable} from '../widgets';

export default class Member extends Component{
	constructor(props) {
		super(props);
	}

	onExportClick(){
		console.log('member export ');
	}

	render() {
		return (
			<div className="member-wrap">
				<ContentNav 
					title="会员管理项"
					btnOpts={[{text : '导出' , onClick: ()=>this.onExportClick()}]}
				/>
				<div className="member-content">
					<CustomTable />
				</div>
				
			</div>
		)
	}
}