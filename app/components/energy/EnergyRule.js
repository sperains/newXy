// 能量规则

import React , {Component} from 'react';
import './EnergyRule.scss';
import {ContentNav} from '../widgets';
import {EnergyRuleEdit} from './';
import DataStore from '../../utils/DataStore';
import { connect } from 'react-redux';

const columns = [
	{ title : '项目' , cls : 'name' },
	{ title : '能量规则'  ,cls : 'rule'},
	{ title : '开启状态' , cls : 'status'},
]

class EnergyRule extends Component{
	constructor(props) {
		super(props);
             this.state={
                  ruleEditDisplay : false ,
             }
	}

	componentDidMount() {
        DataStore.getIntegralRule().then(data=>{
            this.props.dispatch({
              type : 'GET_RULE_LIST',
              ruleList : data
            })
        })
	}

      onNewRuleClick(){
            this.props.dispatch({type : 'GET_CURRENT_RULE'});
            this.setState({ruleEditDisplay : true})
      }

      onEnergyRuleEditCloseClick(){
            this.setState({
                ruleEditDisplay : false
            })
      }

      onRuleStateChange(item , index){
        let flag = !item.isOpen ? 1 : 0 ;
        this.props.dispatch({
              type : 'RULE_STASTE_CHANGE',
              index : index
            })
      }

      // 编辑能量规则
      onEditRuleClick(item , index){
        this.props.dispatch({type : 'GET_CURRENT_RULE' , index : index});
        this.setState({ruleEditDisplay : true , ruleEditType : 2});
      }

      // 删除能量规则
      onDeleteRuleClick(item , index){
        this.props.dispatch({
              type : 'DELETE_RULE',
              index : index
            })
      }

	render() {
		return (
			<div className="energy-rule-wrap">
				<ContentNav 
				 title="能量规则"
				 btnOpts={[{text : '新建规则' , onClick:()=>this.onNewRuleClick()}]}
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
								this.props.ruleList.map( (item , index)=>{
									return (
										<div key={index} className="energy-rule-table-body-row">
											<span className="energy-rule-table-body-row-name">{item.name}</span>
											<span className="energy-rule-table-body-row-rule">{item.integral} {item.ruleName}</span>
											<div className="energy-rule-table-body-row-status">
												<div onClick={()=>this.onRuleStateChange(item,index)} className={item.isOpen ?"energy-rule-table-body-row-status-switch energy-rule-table-body-row-status-switch-open" : 'energy-rule-table-body-row-status-switch'}></div>
												<div onClick={()=>this.onEditRuleClick(item,index)} className="energy-rule-table-body-row-status-btn energy-rule-table-body-row-status-edit"></div>
												<div onClick={()=>this.onDeleteRuleClick(item,index)} className="energy-rule-table-body-row-status-btn energy-rule-table-body-row-status-delete"></div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
                          { 
                            this.state.ruleEditDisplay && <EnergyRuleEdit 
                                  ruleInfo={ this.props.currentRule }
                                  onClose={()=>this.onEnergyRuleEditCloseClick()} 
                                  />
                          }
			</div>
		)
	}
}

const mapStateToProps= state=>{
  return {ruleList : state.energy.ruleList , currentRule : state.energy.currentRule} 
}

export default connect(mapStateToProps)(EnergyRule);