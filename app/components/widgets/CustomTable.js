// 自定义表格

import React , {Component} from 'react';
import './CustomTable.scss';
import {Input , Table  , Icon , Pagination} from 'antd';

const Search = Input.Search;



export default class CustomTable extends Component{
	constructor(props) {
		super(props);
		this.state = {
			pageSize : 10 ,		//默认每页显示条数
		}
	}

	onPageSizeChange(e){
		console.log(e.key);
		// let pageSize = e.target.value;
		// console.log(pageSize);
		if(!(/^[0-9]*[1-9][0-9]*$/).test(pageSize)){
			return ;
		}
		if(e.key === 'Enter'){
			this.setState({pageSize});
		}
	}

	onEnterPress(e){
		let pageSize = parseInt(e.target.value);
		this.setState({pageSize})
	}

	render() {
		const { columns , dataSource , scroll } = this.props;
		const pagination = {
			total: dataSource.length,
			showSizeChanger: false,
			pageSize : this.state.pageSize,
			onShowSizeChange: (current, pageSize) => {
				console.log('Current: ', current, '; PageSize: ', pageSize);
			},
			onChange: (current) => {
				console.log('Current: ', current);
			},
		};
		return (
			<div className="custom-table" onKeyPress={()=>{this.refs.page_size.focus()}}>
				<div className="custom-table-topbar">
					<div className="custom-table-topbar-setting">
						单页显示行数 <Input placeholder={this.state.pageSize} ref='page_size'  onPressEnter={(e)=>this.onEnterPress(e)}  type="number" className="custom-table-topbar-setting-page-input" />	
					</div>
					 <Search
					    placeholder="搜索"
					    style={{ width: 350 }}
					    onSearch={value => console.log(value)}
					  />
				</div>
				<div className="custom-table-content">
					<Table columns={columns} dataSource={dataSource}  scroll={scroll} pagination={pagination} />
				</div>
				<div className="custom-table-pagingbar">
				</div>
			</div>
		)
	}
}