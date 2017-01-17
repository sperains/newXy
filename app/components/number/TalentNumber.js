
import React , {Component} from 'react';
import './TalentNumber.scss';
import {NumberContent } from './';

export default class TalentNumber extends Component{
	constructor(props) {
		super(props);
		this.state={
			currentNum : 1 
		}
	}

	componentDidMount() {
		//获取天赋数信息.
	}

	onNumberChange(num){
		this.setState({
			currentNum : num
		})
	}

	onNewDetailClick(){
		console.log('talentDetail click');
	}

	render(){
		return (
			<div className="talent-number-wrap">
				<span onClick={()=>this.onNewDetailClick()} className="talent-number-new">添加详解</span>
				<NumberContent  currentNum={this.state.currentNum}/>
				<div className="talent-number-footer">
					{
						[1,2,3,4,5,6,7,8,9,0].map( (num,index)=>{
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