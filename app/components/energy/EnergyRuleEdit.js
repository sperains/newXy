
import React , {Component} from 'react';
import './EnergyRuleEdit.scss';
import Modal from 'react-modal';
import {Input , Select} from 'antd';

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
			name : '',
			integral : 0 ,
			rule : 0
		}
	}

	componentDidMount() {
		let ruleInfo = this.props.ruleInfo;
		if(ruleInfo){ this.setState(ruleInfo)}
	}
	
	onRuleNameChange(e){
		this.setState({name : e.target.value})
	}
	onIntegralChange(e){

		let integral = e.target.value.replace(/[^\d]/g,'');
		console.log(integral)
		if(integral < 0 ) return ;
		this.setState({integral});
	}
	onRuleChange(value){
		let rule = value;
		this.setState({rule});
	}
	onRuleSaveClick(){
		let ruleInfo = this.state;
		console.log(ruleInfo);
	}

	render() {
		const { onClose , ruleInfo} = this.props;
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
								<Select defaultValue='0' style={{ width: 140 }} >
									      <Option value="0">请选择</Option>
									      <Option value="1">正念训练</Option>
									      <Option value="2">喜悦活动</Option>
								</Select>
								<Select defaultValue='0' style={{ width: 140 }} >
									      <Option value="0">请选择</Option>
									      <Option value="1">正念静坐</Option>
									      <Option value="2">正念行走</Option>
								</Select>
							</div>
						</div>
						<div className="energy-rule-edit-form-item">
							<div className="energy-rule-edit-form-item-label">能量规则<span></span></div>
							<div className="energy-rule-edit-form-item-content">
								<Input onChange={(e)=>this.onIntegralChange(e)} type="number" style={{width : 80}} value={ this.state.integral} placeholder="数值"/>
								<Select onChange={(e)=>this.onRuleChange(e)} defaultValue={ this.state.rule + ''} style={{ width: 200 }} >
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