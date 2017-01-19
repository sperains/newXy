
import React , {Component} from 'react';
import './NumberContent.scss';
import {Input} from 'antd';
const uuid = require('uuid');

const nums = ["一","二","三","四","五","六","七","八","九"];

export default class NumberContent extends Component{
	constructor(props) {
		super(props);
		this.state={
			details : [
				{ id : uuid() , content: uuid},
				{ id : uuid() , content: uuid},
				{ id : uuid() , content: uuid},
				{ id : uuid() , content: uuid},
				{ id : uuid() , content: uuid},
				{ id : uuid() , content: uuid},
			]
		}
	}

	onEditDetailClick(id){
		console.log('edit Detail' , id);
	}

	onDelDetailClick(id){
		console.log('del' , id);
	}

	render() {
		return (
			<div className="number-content">
				<div className="number-image">
					{this.props.currentNum}
				</div>
				<div className="number-form">
					<div className="number-form-item">
						<div className="number-form-item-label">概述<span></span></div>
						<Input style={{ width : '600px'}} type="textarea" placeholder="Autosize height based on content lines" autosize disabled={false} />
						<div className="number-form-item-edit"></div>
					</div>
					{
						this.state.details.map( (detail,index)=>{
							return (
								<div key={index} className="number-form-item">
									<div className="number-form-item-label">详解{nums[index]}<span></span></div>
									<Input style={{ width : '600px' }} type="textarea" placeholder={detail.content} autosize />
									<div onClick={()=>this.onEditDetailClick(detail.id)} className="number-form-item-edit"></div>
									{
										index != 0 && <div onClick={()=>this.onDelDetailClick(detail.id)} className="number-form-item-delete"></div> 
									}
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}