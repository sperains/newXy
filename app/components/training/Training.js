
// 正念训练页面

import React , {Component} from 'react';
import {ContentNav} from '../widgets';
import TrainingItem from './TrainingItem';
import TraningItemEdit from './TraningItemEdit';
import DataStore from '../../utils/DataStore';
import './Training.scss';



const data = [
	{	
		id : '1',
		title  : '正念行走',
		items :[
			{ title : '主题' , active : 1 },
			{ title : '描述' , active : 1},
			{ title : '背景音乐一' , active : 1},
			{ title : '背景音乐二' , active : 1 },
			{ title : '背景音乐三' , active : 1 },
			{ title : '文字介绍' , active : 1},
		],
	},
	{	
		id : '2',
		title  : '正念行走',
		items :[
			{ title : '主题' , active : 1 },
			{ title : '描述' , active : 1},
			{ title : '背景音乐一' , active : 1},
			{ title : '背景音乐二' , active : 1 },
			{ title : '背景音乐三' , active : 1 },
			{ title : '文字介绍' , active : 1},
		],
	},
	{
		id : '3',
		title  : '正念行走',
		items :[
			{ title : '主题' , active : 1 },
			{ title : '描述' , active : 1},
			{ title : '背景音乐一' , active : 1},
			{ title : '背景音乐二' , active : 1 },
			{ title : '背景音乐三' , active : 1 },
			{ title : '文字介绍' , active : 1},
		],
	},
	{	
		id : '4',
		title  : '正念行走',
		items :[
			{ title : '主题' , active : 1 },
			{ title : '描述' , active : 1},
			{ title : '背景音乐一' , active : 1},
			{ title : '背景音乐二' , active : 1 },
			{ title : '背景音乐三' , active : 1 },
			{ title : '文字介绍' , active : 1},
		],
	}
]

export default class Training extends Component{

	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen : false,
			currentTrainingItem : '',
			trainingList : []
		}
		this.onNewItemClick = this.onNewItemClick.bind(this);
		this.onItemEditClick = this.onItemEditClick.bind(this);
		this.onTraningItemEditCloseClick = this.onTraningItemEditCloseClick.bind(this);
	}

	componentDidMount() {
		let me = this ;
		DataStore.getTrainingList().then( data=>{
			me.setState({
				trainingList : data
			})
		})
	}

	onNewItemClick(){
		console.log('new item');
		this.setState({
			modalIsOpen : true
		})
	}

	onItemEditClick(item , index){
		this.setState({
			modalIsOpen : true,
			currentTrainingItem : data[index]
		})
	}

	onItemDeleteClick(item , index){
		console.log('delete' , item);
	}

	// 关闭编辑弹窗
	onTraningItemEditCloseClick(){
		this.setState({
			modalIsOpen : false
		})
	}

	render() {
		return (
			<div className="training-wrap">
				<ContentNav 
				title="正念训练项"
				btnOpts={[ {text : '添加新类别' , onClick: this.onNewItemClick} ]}
				 />
				<div className="training-content">
					{
						this.state.trainingList.map( (item,index) =>
							(<TrainingItem 
								key={index}
								title={item.title}
								onEditClick={()=>this.onItemEditClick(item , index)}
								onDeleteClick={()=>this.onItemDeleteClick(item , index)}
								items={item.items}
							/>)
						)
					}
					
					
					{
						this.state.modalIsOpen && 
						<TraningItemEdit 
						modalIsOpen={true}
						onClose={this.onTraningItemEditCloseClick}
						content={this.state.currentTrainingItem}
						/> 
					}
					
				</div>
			</div>
		)
	}	
}