
// 正念训练页面

import React , {Component} from 'react';
import {ContentNav} from '../widgets';
import TrainingItem from './TrainingItem';
import Modal from 'react-modal';
import './Training.scss';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
   overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.6)'
  },

};

const items=[
	{ title : '主题' , active : 1},
	{ title : '描述' , active : 1},
	{ title : '背景音乐一' , active : 0},
	{ title : '背景音乐二' , active : 0},
	{ title : '背景音乐三' , active : 0}
]

export default class Training extends Component{

	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen : false
		}
		this.onNewItemClick = this.onNewItemClick.bind(this);
		this.onItemEditClick = this.onItemEditClick.bind(this);
	}

	onNewItemClick(){
		console.log('new item');
	}

	onItemEditClick(item , index){
		console.log('edit' , item);
		this.setState({
			modalIsOpen : true
		})
	}

	onItemDeleteClick(item , index){
		console.log('delete' , item);
	}

	render() {
		return (
			<div className="training-wrap">
				<ContentNav 
				title="正念训练项"
				btnOpts={[ {text : '添加新类别' , onClick: this.onNewItemClick} ]}
				 />
				<div className="training-content">
					<TrainingItem 
						title="正念行走"
						onEditClick={()=>this.onItemEditClick()}
						onDeleteClick={()=>this.onItemDeleteClick()}
						items={items}
					/>
					<TrainingItem 
						title="正念行走"
						onEditClick={function(){console.log('edit click')}}
						onDeleteClick={function(){console.log('delete click')}}
						items={items}
					/>
					<TrainingItem 
						title="正念行走"
						onEditClick={function(){console.log('edit click')}}
						onDeleteClick={function(){console.log('delete click')}}
						items={items}
					/>
					<TrainingItem 
						title="正念行走"
						onEditClick={function(){console.log('edit click')}}
						onDeleteClick={function(){console.log('delete click')}}
						items={items}
					/>
					<TrainingItem 
						title="正念行走"
						onEditClick={function(){console.log('edit click')}}
						onDeleteClick={function(){console.log('delete click')}}
						items={items}
					/>
					<TrainingItem 
						title="正念行走"
						onEditClick={function(){console.log('edit click')}}
						onDeleteClick={function(){console.log('delete click')}}
						items={items}
					/>
					 <Modal
					          isOpen={this.state.modalIsOpen}
					          style={customStyles}
					          contentLabel="Example Modal"
					        />
				</div>
			</div>
		)
	}	
}