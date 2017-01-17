// 命运数

import React , {Component} from 'react';
import './FateNumber.scss';
import {Input} from 'antd';
import {NumberContent} from './';

export default class FateNumber extends Component{
	constructor(props) {
		super(props);
		this.state={
			currentNum : 1 
		}
	}


	componentDidMount() {
		console.log('fateNumber did mount')
		//获取命运数信息.
	}

	componentWillUnmount() {
		console.log('fateNumber unmount')
	}

	onNumberChange(num){
		this.setState({
			currentNum : num
		})
	}
	onNewDetailClick(){
		console.log('fateDetail click');
	}

	render() {
		return (
			<div className="fate-number-wrap">
				<span onClick={()=>this.onNewDetailClick()} className="fate-number-new">添加详解</span>
				<NumberContent currentNum={this.state.currentNum} />
				<div className="fate-number-footer">
					{
						[1,2,3,4,5,6,7,8,9].map( (num,index)=>{
							return (
								<span onClick={()=>this.onNumberChange(num)} className={num == this.state.currentNum ? 'active' : ''} key={index}>{num}</span>
							)
						})
					}
				</div>
				
			</div>
		)
	}	
}