
import  React , {Component} from 'react';
import './Active.scss';
import {ContentNav} from '../widgets/index';
import ActiveList from './ActiveList';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';


export default class Active extends Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	onNewActiveClick(){
		hashHistory.push('/active/new');
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




