
import React , {Component} from 'react';
import ActiveItem from './ActiveItem';
import './ActiveList.scss';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';

class ActiveList extends Component{
	constructor(props) {
		super(props);	
		this.onDeleteClick= this.onDeleteClick.bind(this);
		this.onDetailClick = this.onDetailClick.bind(this);
	}

	onDetailClick(index,e){
		hashHistory.push("/active-edit");
	}

	onDeleteClick(index, e){
		this.props.dispatch({
			type : 'DELETE_ACTIVE',
			index : index
		})
	}

	onReleaseStateChange(index , e){
		this.props.onReleaseStateChange(index)
	}

	render() {
		const {activeList} = this.props;
		console.log('activeList' : activeList);
		return (
			<div className="active-list">
				{
					activeList && activeList.length >0 && activeList.map( (active,index)=>(
						<ActiveItem 
						key={index}
						activeNo={index}
						canDelete={true} 
						onDetail={this.onDetailClick.bind(this,index)}
						onDelete={this.onDeleteClick.bind(this,index)}
						onReleaseStateChange={this.onReleaseStateChange.bind(this,index)}
						activeInfo={active}
						/>
					)) 
				}
			</div>
		)
	}

}

export default connect()(ActiveList);