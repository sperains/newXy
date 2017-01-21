
import React , {Component} from 'react';
import './EnergyRuleEdit.scss';
import Modal from 'react-modal';
import {Input , Select ,Message} from 'antd';

const Option = Select.Option;

const customStyles = {
	content : {
		top  : '72px',
		left  : '50%',
		right : 'auto',
		bottom : 'auto',
		marginRight : '-50%',
		transform  : 'translate(-50%, 0)',
		padding : '0' ,
		border : 'none' ,
		borderRadius : 'none' 
	},
	overlay : {
		position  : 'fixed',
		top  : 0,
		left  : 0,
		right  : 0,
		bottom  : 0,
		backgroundColor : 'rgba(0, 0, 0, 0.6)'
	},

};

export default class EnergyRuleEdit extends Component{
	constructor(props) {
		super(props);
		this.state={
			ruleInfo : {
				name : '',
				integral : 0 ,
				rule : 0 ,
				item : 0 ,	//项目
				type : 0 ,	//类型
			},
			list1: [ { id : 1 , name : '正念训练' } , { id : 2 , name : '喜悦训练' } , { id : 3 , name : '生命数字' } , { id : 4 , name : '会员管理' }],
			list2: [ ],
		}
	}

	componentDidMount() {
		let ruleInfo = this.props.ruleInfo;
		if(ruleInfo){ this.setState({ ruleInfo : Object.assign({} , this.state.ruleInfo , ruleInfo)})};
	}

	// 保存能量规则
	onRuleSaveClick(){
		let ruleInfo = this.state.ruleInfo;
		Message.success(`ruleInfo:${JSON.stringify(ruleInfo)}`,5 )
	}

	
	onIntegralChange(e){
		let integral = e.target.value;
		if(!(/^[0-9]*[1-9][0-9]*$/).test(integral)){
			return ;
		}
		this.setRuleInfo('integral' ,integral );
	}

	onRuleChange(value){
		let rule = parseInt(value);
		this.setRuleInfo('rule' , rule);
	}

	onItemChange(value){
		let item = parseInt(value);
		this.setRuleInfo('item' , item);
	}

	onTypeChange(value){
		let type = parseInt(value);
		this.setRuleInfo('type' , type);
	}


	setRuleInfo(prop , value){
		let ruleInfo = this.state.ruleInfo;
		ruleInfo[prop] = value;
		this.setState({ruleInfo});

	}

	render() {
		const { onClose } = this.props;
		const ruleInfo = this.state.ruleInfo;
		console.log(ruleInfo)
		return (
			<Modal 
			isOpen={true}
			contentLabel="asdfasdf"
			style={customStyles}
			>
				<div className="energy-rule-edit">
					<div className="energy-rule-edit-close" onClick={onClose}></div>
					<div className="energy-rule-edit-form">
						<div className="energy-rule-edit-form-item">
							<div className="energy-rule-edit-form-item-label">项目<span></span></div>
							<div className="energy-rule-edit-form-item-content">
								<Select defaultValue='0' style={{ width: 140 }} onChange={(value)=>this.onItemChange(value)} value={ruleInfo.item + ''} >
									      <Option value="0">请选择</Option>
									     {
									     	this.state.list1.map( (item , index)=>(<Option key={index} value={item.id + ''}>{item.name}</Option>))
									     }
								</Select>
								<Select defaultValue='0' style={{ width: 140 }} onChange={(value)=>this.onTypeChange(value)} value={ruleInfo.type + ''} >
									      <Option value="0">请选择</Option>
									      <Option value="1">正念静坐</Option>
									      <Option value="2">正念行走</Option>
								</Select>
							</div>
						</div>
						<div className="energy-rule-edit-form-item">
							<div className="energy-rule-edit-form-item-label">能量规则<span></span></div>
							<div className="energy-rule-edit-form-item-content">
								<Input onChange={(e)=>this.onIntegralChange(e)} type="number" style={{width : 80}} value={ ruleInfo.integral} placeholder="数值"/>
								<Select onChange={(e)=>this.onRuleChange(e)} defaultValue={ ruleInfo.rule + ''} value={ruleInfo.rule + ''} style={{ width: 200 }} >
									 	<Option value="0">请选择</Option>
									      <Option value="1">点能量/次</Option>
									      <Option value="2">点能量/元</Option>
								</Select>
							</div>
						</div>
					</div>
					<div className="energy-rule-edit-commit">
						<div onClick={()=>this.onRuleSaveClick()} className="energy-rule-edit-commit-btn"><div>完成<span></span></div></div>
					</div>
				</div>
			</Modal>
		)
	}
}