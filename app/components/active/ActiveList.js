
import React , {Component} from 'react';
import ActiveItem from './ActiveItem';
import './ActiveList.scss';
import { connect } from 'react-redux';

class ActiveList extends Component{
	constructor(props) {
		super(props);	
		this.onDeleteClick= this.onDeleteClick.bind(this);
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
					activeList && activeList.map( (active,index)=>(
						<ActiveItem 
						key={index}
						activeNo={index}
						canDelete={true} 
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