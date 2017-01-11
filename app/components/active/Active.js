
import  React , {Component} from 'react';
import './Active.scss';
import {ContentNav} from '../widgets/index';
import ActiveList from './ActiveList';

export default class Active extends Component{
	constructor(props) {
		super(props);
		this.state={
		}
	}

	onNewActiveClick(){
		console.log(this.state);
	}

	render() {
		return (
			<div className="active-wrap">
				<ContentNav 
				title="喜悦活动项" 
				btnOpts={[
					{text :'添加活动',onClick : this.onNewActiveClick.bind(this)}
				]}
				/>
				<ActiveList />
			</div>
		)
	}
}

