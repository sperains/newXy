
import React , {Component} from 'react';
import './Identity.scss';
import {ContentNav} from '../widgets';
import DataStore from '../../utils/DataStore';
const columns =[
	{ title : '级别' , cls : 'level' },
	{ title : '登录账号' , cls : 'username' },
	{ title : '电话' , cls : 'phone'},
	{ title : '模块权限' , cls : 'promission'},
	{ title : '操作' , cls : 'option'}
]

export default class Identity extends Component{
	constructor(props) {
		super(props);
		this.state={
			data : []
		}
	}

	componentDidMount() {
		let me = this ;
		DataStore.getIdentityInfo().then( data=>{
			console.log(data);
			me.setState({data});
		})
	}

	render() {
		return (
			<div className="identity-wrap">
				<ContentNav 
					title="职级管理项"
					btnOpts={[{text:'新建职位',onClick:()=>console.log('new identity')}]}
				/>
				<div className="identity-content">
					<div className="identity-content-table">
						<div className="identity-content-table-header">
						{
							columns.map( (col , index)=>{
								return (
									<span key={index} className={'identity-content-table-header-'+col.cls}>{col.title}</span>
								)
							})
						}
						</div>
						<div className="identity-content-table-body"> 
							{
								this.state.data.map( (identity,index)=>{
									return (
										<div key={index} className="identity-content-table-body-row">
											<div className={'identity-content-table-body-row-' +columns[0].cls }>{identity.identityName}</div>
											<div className={'identity-content-table-body-row-' +columns[1].cls }>{identity.username}</div>
											<div className={'identity-content-table-body-row-' +columns[2].cls }>{identity.phone}</div>
											<div className={'identity-content-table-body-row-' +columns[3].cls }>
												<span><p>正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练正念训练</p></span>
											</div>
											<div className={'identity-content-table-body-row-' +columns[4].cls }>
												<div className={'identity-content-table-body-row-' +columns[4].cls +'-edit'}></div>
												<div className={'identity-content-table-body-row-' +columns[4].cls +'-delete'}></div>
											</div>
										</div>
									)
								})
							}
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}