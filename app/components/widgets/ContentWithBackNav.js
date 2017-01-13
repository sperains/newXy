
import React , {Component} from 'react';
import './ContentWithBackNav.scss';

export default class ContentWithBackNav extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {prev , current , btnOpts , onBack} = this.props;

		return (
			<div className="content-with-back-nav-wrap">
				<div className="content-with-back-nav-wrap-left">
					<div onClick={onBack} className="content-with-back-nav-wrap-left-back-img"></div>
					<div className="content-with-back-nav-wrap-left-nav">
						<span className="content-with-back-nav-wrap-left-nav-prev">{prev}</span>
						<span>/</span>
						<span className="content-with-back-nav-wrap-left-nav-current">{current}</span>
					</div>
				</div>
				<div className="content-with-back-nav-wrap-right">	
					{
						btnOpts && btnOpts.map( (btnOpt,index)=> (
							<span key={index} onClick={btnOpt.onClick} className="content-with-back-nav-wrap-right-btn">{btnOpt.text}</span>
							))
					}
				</div>
			</div>
		)
	}
}