
import React , {Component} from 'react';
import './Member.scss';
import {ContentNav , CustomTable} from '../widgets';
import DataStore from '../../utils/DataStore.js' ;
import {Menu , Dropdown } from 'antd';

const uuid = require('uuid');

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

export default class Member extends Component{
	constructor(props) {
		super(props);
	}

	onExportClick(){
		console.log('member export ');
	}

	render() {

		const columns = [
			{ title: '序号', width : 50 , render:(value , record , index)=>index}, 
			{ title: '姓名',dataIndex: 'name',width : 200,}, 
			{ title: '电话', dataIndex: 'phone' ,width : 100}, 
			{ title: '出生日期', dataIndex: 'birthday' , width : 150 },
			{ title: '微信昵称', dataIndex:'nickname' , width : 200 },
			{ title : '能量总额', dataIndex:'totalScore' ,width : 120  },
			{ title : '捐款总额', dataIndex : 'donatedMoney' , width : 120},
			{ title : '邀请人', 	dataIndex : 'inviter' ,width : 120 },
		
			{ title : '详情' , dataIndex : 'detail'  , render : (value , record , index) => (<a style={{ color : record.identity == 1 ? 'gray' : '' , cursor : record.identity == 1 ?'default' : 'pointer'}} className="row-detail" onClick={ () =>this.onDetailClick(value , record , index)}>详情</a>) }
		];
		return (
			<div className="member-wrap">
				<ContentNav 
					title="会员管理项"
					btnOpts={[{text : '导出' , onClick: ()=>this.onExportClick()}]}
				/>
				<div className="member-content">
					<CustomTable 
						columns={columns}
						dataSource={data}
					/>
				</div>
				
			</div>
		)
	}
}