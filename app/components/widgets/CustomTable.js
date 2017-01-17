
import React , {Component} from 'react';
import './CustomTable.scss';
import {Input , Table  , Icon} from 'antd';

const Search = Input.Search;

const columns = [
	{	title : '序号' , dataIndex : 'key' ,},
	{	title: '姓名',	dataIndex: 'name', width: 200 }, 
	{	title: '电话',	dataIndex: 'phone',	width: 110}, 
	{	title: '预到意向',	dataIndex: 'itention', width: 80	 }, 
	{	title: '签到状态',	dataIndex: 'checkInStatus', width: 80 }, 
	{	title: '年龄',	dataIndex: 'age' , sorter: (a, b) => a.age - b.age , width: 70}, 
	{	title: '性别',	dataIndex: 'sex', width: 60}, 
	{	title: '微信号',	dataIndex: 'wx', width: 200}, 
	{	title: '地址',	dataIndex: 'address',}, 
	// {
	// 	title: '电话',
	// 	dataIndex: 'age',
	// 	key: 'age',
	// 	}, {
	// 	title: 'Address',
	// 	dataIndex: 'address',
	// 	key: 'address',
	// 	}, 
	// {
	// 	title: 'Action',
	// 	key: 'action',
	// 	render: (text, record) => (
	// 	<span>
	// 	<a href="#">Action 一 {record.name}</a>
	// 	<span className="ant-divider" />
	// 	<a href="#">Delete</a>
	// 	<span className="ant-divider" />
	// 	<a href="#" className="ant-dropdown-link">
	// 	More actions <Icon type="down" />
	// 	</a>
	// 	</span>
	// 	),
	// }
];

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

export default class CustomTable extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="custom-table">
				<div className="custom-table-topbar">
					<div className="custom-table-topbar-setting">
						单页显示行数 <input type="number" className="custom-table-topbar-setting-page-input" />	
					</div>
					 <Search
					    placeholder="搜索"
					    style={{ width: 350 }}
					    onSearch={value => console.log(value)}
					  />
				</div>
				<div className="custom-table-content">
					<Table columns={columns} dataSource={data} />
				</div>
				<div className="custom-table-pagingbar">
				</div>

			</div>
		)
	}
}