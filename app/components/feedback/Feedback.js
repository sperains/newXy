
import React , {Component} from 'react';
import './Feedback.scss';
import {Button} from 'antd';
import {ContentNav} from '../widgets';

export default class Feedback extends Component{
	constructor(props) {
		super(props);
		this.state={
			src : ''
		}
	}

	onEditClick(){
		$.ajax({
			url:"demo_test.txt",
			success:function(result){
	        		$("#div1").html(result);
	    		}
	  	});
	}

	render() {
		return (
			<div className="feedback-wrap">
				<ContentNav 
					title="问卷反馈"
					btnOpts={[
							{text:'编辑',onClick:()=>{console.log('编辑')}},
							{text:'查看',onClick:()=>{console.log('查看')}}
						]}
				/>
				<div className="feedback-content">
				<iframe width="100%" height="100%" scrolling="no" frameBorder="0" src='https://www.wenjuan.com/openapi/v3/get_report_chart/?wj_appkey=wjolvc28drz7rnbl0n&wj_user=maxbos&wj_short_id=ayuuyu&wj_timestamp=1484731278&wj_signature=68109c5d8beceb125522092c592e4754' id="frame1"></iframe>
				</div>
			</div>
		)
	}
}
