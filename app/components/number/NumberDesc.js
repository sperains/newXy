// 生命数字简介

import React , {Component} from 'react';
import './NumberDesc.scss';
import {Input} from 'antd';

export default class NumberDesc extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="number-desc-wrap">
				<div className="number-desc">
					<span className="number-desc-label">概述</span>
					<div className="number-desc-content">
						<Input style={{ width : '600px' }} type="textarea" placeholder="Autosize height based on content lines" autosize disabled />
					</div>
					<div className="number-desc-edit"></div>
				</div>
			</div>
		)
	}
}