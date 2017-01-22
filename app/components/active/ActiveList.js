
import React , {Component} from 'react';
import ActiveItem from './ActiveItem';
import './ActiveList.scss';
import DataStore from '../../utils/DataStore';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';

class ActiveList extends Component{
	constructor(props) {
		super(props);	
	}

	componentDidMount() {
		let me = this ;
		DataStore.getActiveList().then(activeList=>{
			me.props.dispatch({
				type : 'GET_ACTIVITY_LIST',
				activeList : activeList
			})
		})
	}

	onReleaseStateChange(index){
		this.props.dispatch({type : 'ACTIVITY_RELEASE_STATE_CHANGE' , index : index })
	}

	render() {
		return (
			<div className="active-list">
				{
					this.props.activeList && this.props.activeList.length >0 && this.props.activeList.map( (active,index)=>(
						<ActiveItem 
						key={index}
						activeIndex={index}
						canDelete={true} 
						activeInfo={active}
						releaseStateChange={()=>this.onReleaseStateChange(index)}
						/>
					)) 
				}
			</div>
		)
	}

}

const mapStateToProps= state=>{
	return {activeList : state.activity.list} 
}


export default connect(mapStateToProps)(ActiveList);