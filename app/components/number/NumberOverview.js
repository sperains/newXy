// 数字概述

import React , {Component} from 'react';
import './NumberOverview.scss';
import {Input} from 'antd';

export default class NumberOverview extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {onEdit}  = this.props;
		return (
			<div className="number-overview-wrap">
				<div className="number-overview">
					<span className="number-overview-label">概述</span>
					<div className="number-overview-content">
						<Input style={{ width : '600px' }} type="textarea" placeholder="Autosize height based on content lines" autosize disabled={false} />
					</div>
					<div onClick={onEdit} className="number-overview-edit"></div>
				</div>
			</div>
		)
	}
}