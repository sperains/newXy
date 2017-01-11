
import React , {Component} from 'react';
import './trainingItem.scss';

export default class TrainingItem extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		const {items} = this.props;

		return (
			<div className="trainingitem-wrap">
				<div className="trainingitem-title">
					<span className="trainingitem-title-text">{this.props.title}</span>
					<div className="trainingitem-title-btns">
						<span className="trainingitem-title-btns-spe"></span>
						<span onClick={this.props.onEditClick} className="trainingitem-title-btn trainingitem-title-btns-edit"></span>
						<span className="trainingitem-title-btns-spe"></span>
						<span onClick={this.props.onDeleteClick} className="trainingitem-title-btn trainingitem-title-btns-delete"></span>
					</div>
				</div>
				<div className="trainingitem-content">
					<div className="trainingitem-content-itemswrap">
						{
							items.map( (item,index)=>{
								return (
									<div key={index} className="trainingitem-content-item">
										<div className={item.active ? 'trainingitem-content-item-circle trainingitem-content-item-circle-active':'trainingitem-content-item-circle'}></div>
										<span>{item.title}</span>
									</div>
								)
							})
						}
					</div>
					
				</div>
			</div>
		)
	}
}