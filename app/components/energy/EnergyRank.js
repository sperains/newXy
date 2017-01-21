
import React , {Component} from 'react';
import './EnergyRank.scss';
import {ContentNav , CustomTable} from '../widgets';

const uuid = require('uuid');

const columns = [
	{ title: '名	次',dataIndex: 'rankIndex',width : 60 , fixed:'left'}, 
	{ title: '昵称(姓名)', dataIndex: 'name' ,width : 200 ,fixed:'left'}, 
	{ title : '手机号', dataIndex:'phone' ,width : 120  },
	{ title: '身	份', dataIndex: 'identity' , width : 100 , render : value => {
		let str = '';
		switch(value){
			case '1' : str = '普通会员'; break;
			case '2' : str = '高级会员'; break;
			case '3' : str = '堂主'; break;
		}
		return str;
	}},

	{ title : '喜悦活动能量', dataIndex:'activeScore' ,width : 120  },
	{ title : '生命数字能量', dataIndex : 'numberScore' , width : 120},
	{ title : '正念生活能量', dataIndex : 'lifeScore' ,width : 120 },
	{ title : '捐赠能量', dataIndex : 'donationScore' , width : 100},
	{ title : '能量总额' , dataIndex : 'totalScore' ,width : 100 } ,
	{ title : '详	情' , dataIndex : 'detail'  ,render : (value , record) => <span style={{color : 'blue' , cursor : 'pointer'}} onClick={()=>onScoreRankDetailClick(record)} className="score-rank-table-row-detail">详	情</span>},
];

function onScoreRankDetailClick(record){
	hashHistory.push({
		pathname : '/energy/detail',
		state : record
	});
}

const data = [
	{ key: '1',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 1, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',}, 
	{ key: '2',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 2, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '3',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 3, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '4',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 4, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '5',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 5, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '6',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 6, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '7',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 7, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '8',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 8, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '9',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 9, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '10',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 10, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '11',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 11, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '12',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 12, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '13',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 13, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '14',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 14, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '15',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 15, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 
	{ key: '16',name: 'John Brown',phone : '15623551300',itention : 1,checkInStatus : 1 ,age: 16, sex : 1 ,wx : 'sun', address: 'New York No. 1 Lake Park',}, 

];


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
					<CustomTable 
						columns={columns}
						dataSource={data}
						scroll={{x:1200}}
					/>
				</div>
			</div>
		)
	}
}