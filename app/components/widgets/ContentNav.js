
import React , {Component} from 'react';
import './ContentNav.scss';

export default class ContentNav extends Component{

	constructor(props) {
		super(props);
		
	}

	render() {
		const { title , btnOpts} = this.props;
		return (
			<div className="content-nav-wrap">
				<div className="content-nav-title">
					<span>{title}</span>
				</div>
				<div className="content-nav-btns">
					{btnOpts ? btnOpts.map( (btnOpt,index) => (<span key={index} onClick={btnOpt.onClick} >{btnOpt.text}</span>)) : ''}
				</div>
			</div>
		)
	}
}