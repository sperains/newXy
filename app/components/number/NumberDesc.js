// 生命数字简介

import React , {Component} from 'react';
import './NumberDesc.scss';
import {Input} from 'antd';
import {NumberOverview} from './';

export default class NumberDesc extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="number-desc-wrap">
				<NumberOverview 
				onEdit={()=>console.log('number-desc edit')}
				/>
			</div>
		)
	}
}