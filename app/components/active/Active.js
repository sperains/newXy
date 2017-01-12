
import  React , {Component} from 'react';
import './Active.scss';
import {ContentNav} from '../widgets/index';
import ActiveList from './ActiveList';
import DataStore from '../../utils/DataStore';
import { connect } from 'react-redux';


class Active extends Component{
	constructor(props) {
		super(props);
		this.deleteActive = this.deleteActive.bind(this);
		this.onReleaseStateChange = this.onReleaseStateChange.bind(this);
	}

	componentDidMount() {
		let me = this ;
		DataStore.getActiveList().then(activeList=>{
			console.log(activeList);
			me.props.dispatch({
				type : 'ADD_ACTIVE_LIST',
				activeList : activeList
			})
		})
	}

	onNewActiveClick(){
		console.log(this.state);
	}

	deleteActive(index){
		console.log(index);
		let activeList = this.state.activeList;
		activeList.splice(index,1);
		this.setState({activeList});
	}
	onReleaseStateChange(index){
		console.log('releaseChange' ,index);
		let activeList = this.state.activeList;
		activeList.forEach((active,i)=>{
			if(index==i){
				active.release = !active.release
			}
		})
		this.setState({activeList});
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
				<ActiveList 
				activeList={this.props.activeList} 
				onDelete={this.deleteActive} 
				onReleaseStateChange={this.onReleaseStateChange}/>
			</div>
		)
	}
}

const mapStateToProps= state=>{return {activeList : state.active.activeList} }


export default connect(mapStateToProps)(Active);


