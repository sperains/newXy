
import React ,{Component} from 'react';
import './Donation.scss';
import {ContentNav} from '../widgets';

export default class Donation extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="donation-wrap">
				<ContentNav 
					title="捐赠管理项"
				/>
			</div>
		)
	}
}