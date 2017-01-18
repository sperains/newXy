
import React , {Component} from 'react';
import './Number.scss';
import { ContentNav} from '../widgets';
import {NumberDesc , FateNumber , TalentNumber , BabyNumber} from './';

export default class Number extends Component{

	constructor(props) {
		super(props);
		this.state={
			tabs : [
				{title : '数字简介' , active : true },
				{title : '喜宝数字' , active : false },
				{title : '命运数' , active : false },
				{title : '天赋数' , active : false },
			],
			currentTabIndex : 0  
		}
	}

	onNewDetailClick(){
		console.log('new detail');
	}

	onTabChange(tab, index){
		let tabs = this.state.tabs;
		tabs.forEach( (tab, i)=>{
			if(index == i){
				tab.active=true;
			}else{
				tab.active=false;
			}
		})
		this.setState({
			tabs : tabs,
			currentTabIndex : index
		})
	}

	render() {
		let currentEl ;
		switch(this.state.currentTabIndex){
			case 0 : currentEl = <NumberDesc />;break;
			case 1 : currentEl = <BabyNumber />;break;
			case 2 : currentEl = <FateNumber />;break;
			case 3 : currentEl = <TalentNumber />;break;
		}

		return (
			<div className="number-wrap">
				<ContentNav 
					title="生命数字项"
				/>
				<div className="number-content-wrap">
					<div className="number-tab">
						{
							this.state.tabs.map( (tab, index)=>
							(<span 
								key={index} 
								onClick={()=>this.onTabChange(tab,index)}
								className={tab.active? "number-tab-item number-tab-item-active" : "number-tab-item" }>{tab.title}
							</span>))
						}
					</div>
					<div className="number-detail">
						{currentEl}
					</div>
				</div>
				
			</div>
		)
	}
}