
import React , {Component} from 'react';
import {ContentWithBackNav , CustomTable} from '../widgets';
import {hashHistory} from 'react-router';
import './ActiveEnrollList.scss';
import DataStore from '../../utils/DataStore';
import { connect } from 'react-redux';

const data=[{ checkInStatus : 1 , index : 1 , intention : 1 , diseaseRecord : 'hahahahaah' } , { checkInStatus : 0 , index : 2 , intention : 2}]

class ActiveEnrollList extends Component{
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		console.log('current ' , this.props.current)
		DataStore.getEnrollList({id : 1 }).then( data=>{
			this.props.dispatch({type : 'GET_ACTIVITY_ENROLL_LIST' , enrollList : data})
		})
	}

	onExportClick(e , name){
		console.log('export'  , e , name);
	}

	onBackClick(){
		hashHistory.push("/active");
	}

	render() {

		const columns = [
			{ title: '序号',fixed: 'left',width : 50 , render: (value , record , index )=>index+1   }, 
			{ title: '姓名',dataIndex: 'name',fixed: 'left',width : 150}, 
			{ title: '电话', dataIndex: 'phone' ,width : 120 }, 
			{ title : '预到意向', dataIndex:'intention' ,width : 120 , render : value => {
				let str = '';
				switch(value){
					case 1: str = 'YES';break;
					case 2: str = 'NO';break;
				}
				return str;
			} },
			{ title : '签到状态', dataIndex:'checkInStatus' ,width : 120 , render : value => <div className={value == 1 ? 'status status-checked' : value== 0 ? 'status' : ''}></div> },
			{ title: '年龄', dataIndex: 'ageGroup' , width : 120 , render : value => {
				let str = '';
				switch(value){
					case 1 : str = '20岁及以下'; break;
					case 2 : str = '21~30岁'; break;
					case 3 : str = '31~40岁'; break;
					case 4 : str = '41~50岁'; break;
					case 5 : str = '51~60岁'; break;
				}
				return str;
			}},
			{ title : '性别', dataIndex : 'sex' , width : 120 , render : value =>  value== 1 ? '男' : value==2 ? '女' : ''},
			{ title : '微信号', 	dataIndex : 'wechatId' ,width : 120 , render : value => <a title={value}>{value}</a>},
			{ title : '工作单位' , dataIndex : 'company' ,width : 120 ,render : value => <a title={value}>{value}</a>},
			{ title : '职位' , dataIndex : 'job' ,width:120 ,render : value => <a title={value}>{value}</a>},
			{ title : '学历' , dataIndex : 'educational' ,width : 120},
			{ title : '茶道课程' , dataIndex : 'teaCeremony' ,width : 120 , render : value => value == 1 ? '是' : '否'},
			{ title : '喜悦活动' , dataIndex : 'xiyueActive' ,width : 120 ,render : value => value == 1 ? '是' : '否'},
			{ title : '疾病记录' , dataIndex : 'diseaseRecord'  },
			{ title : '地址', dataIndex : 'address' , width : 550 , render : value => <a className="width-list" title={value}>{value}</a> },
			
		];

		const {title }  = this.props.current;
		return (
			<div className="active-enroll-list">
				<ContentWithBackNav 
					prev={'喜悦活动项'}
					current={`${title} 报名详情`}
					btnOpts={[
						{ text : '导出', onClick : (e)=>this.onExportClick(e )}
					]}
					onBack={()=>this.onBackClick()}
				/>
				<div className="active-enroll-list-content">
					<CustomTable 
						columns={columns}
						dataSource={this.props.enrollList}
						scroll={ { x : 2800 }}
					/>
				</div>
			</div>

		)
	}	
}
const mapStateToProps = (state)=>{
	return {enrollList : state.activity.enrollList  , current : state.activity.current} 
}

export default connect(mapStateToProps)(ActiveEnrollList);