// 能量规则

import React , {Component} from 'react';
import './EnergyRule.scss';
import  {ContentNav} from '../widgets';

const columns = [
	{ title : '项目' , cls : 'name' },
	{ title : '能量规则'  ,cls : 'rule'},
	{ title : '开启状态' , cls : 'status'},
]

const data =  [
    {
      "id": "1",
      "name": "正念静坐",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 5,
      "isOpen": 1,
      "type": 0
    },
    {
      "id": "2",
      "name": "正念行走",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 5,
      "isOpen": 0,
      "type": 0
    },
    {
      "id": "3",
      "name": "正念散步",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 5,
      "isOpen": 1,
      "type": 0
    },
    {
      "id": "4",
      "name": "正念睡眠",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 5,
      "isOpen": 0,
      "type": 0
    },
    {
      "id": "5",
      "name": "活动报名",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 0,
      "isOpen": 0,
      "type": 0
    },
    {
      "id": "6",
      "name": "活动签到",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 50,
      "isOpen": 1,
      "type": 0
    },
    {
      "id": "7",
      "name": "生命数字",
      "rule": 2,
      "ruleName": "点能量/次",
      "integral": 2,
      "isOpen": 1,
      "type": 0
    },
    {
      "id": "8",
      "name": "喜悦捐赠",
      "rule": 1,
      "ruleName": "点能量/元",
      "integral": 1,
      "isOpen": 0,
      "type": 0
    }
  ]



export default class EnergyRule extends Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="energy-rule-wrap">
				<ContentNav 
				 title="能量规则"
				 btnOpts={[{text : '新建规则' , onClick:()=>console.log('new Rule')}]}
				/>
				<div className="energy-rule-content">
					<div className="energy-rule-table">
						<div className="energy-rule-table-header">
							{
								columns.map( (col , index)=><span className={'energy-rule-table-header-' + col.cls  } key={index}>{col.title}</span>)
							}
						</div>
						<div className="energy-rule-table-body">
							{
								data.map( (item , index)=>{
									return (
										<div key={index} className="energy-rule-table-body-row">
											<span className="energy-rule-table-body-row-name">{item.name}</span>
											<span className="energy-rule-table-body-row-rule">{item.integral} {item.ruleName}</span>
											<div className="energy-rule-table-body-row-status">
												<div className={item.isOpen ?"energy-rule-table-body-row-status-switch energy-rule-table-body-row-status-switch-open" : 'energy-rule-table-body-row-status-switch'}></div>
												<div className="energy-rule-table-body-row-status-btn energy-rule-table-body-row-status-edit"></div>
												<div className="energy-rule-table-body-row-status-btn energy-rule-table-body-row-status-delete"></div>
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