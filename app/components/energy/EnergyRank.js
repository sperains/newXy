
import React , {Component} from 'react';
import './EnergyRank.scss';
import {ContentNav , CustomTable} from '../widgets';

export default class EnergyRank extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="energy-rank-wrap">
				<ContentNav 
					title="能量排名"
					btnOpts={[{text:'导出' , onClick:()=>console.log('rank export')}]}
				/>
				<div className="energy-rank-content">
					<CustomTable />
				</div>
			</div>
		)
	}
}