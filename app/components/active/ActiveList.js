
import React , {Component} from 'react';
import ActiveItem from './ActiveItem';
import './ActiveList.scss';

export default class ActiveList extends Component{
	constructor(props) {
		super(props);	
	}

	render() {
		return (
			<div>
				<ActiveItem />
			</div>
		)
	}

}