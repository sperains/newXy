
import React , {Component} from 'react';
import {ContentWithBackNav , CustomTable} from '../widgets';
import {hashHistory} from 'react-router';
import './ActiveEnrollList.scss';

export default class ActiveEnrollList extends Component{
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	onExportClick(e , name){
		console.log('export'  , e , name);
	}

	onBackClick(){
		hashHistory.push("/active");
	}

	render() {
		let name = '123'
		return (
			<div className="active-enroll-list">
				<ContentWithBackNav 
					prev={'喜悦活动项'}
					current={'喜悦活动冬季体验课 报名详情'}
					btnOpts={[
						{ text : '导出', onClick : (e)=>this.onExportClick(e , name)}
					]}
					onBack={()=>this.onBackClick()}
				/>
				<div className="active-enroll-list-content">
					<CustomTable />
				</div>
			</div>

		)
	}	


}