// 生命数字简介

import React , {Component} from 'react';
import './BabyNumber.scss';
import {Input} from 'antd';
import {NumberOverview} from './';

export default class BabyNumber extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="baby-number-wrap">
				<NumberOverview 
				onEdit={()=>console.log('baby-number edit')}
				/>
			</div>
		)
	}
}