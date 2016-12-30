import React , {Component} from 'react';
import StyleButton from './StyleButton';

export default class InlineStyleControls extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		let currentStyle = this.props.editorState.getCurrentInlineStyle();
		return (
			<div className="RichEditor-controls">
				{
					this.props.inlineTypes.map( type =>{
						return (
							<StyleButton 
								key={type.label}
								active={currentStyle.has(type.style)}
								label={type.label}
								onToggle={this.props.onToggle}
								style={type.style}
							/>
						)
					})
				}
				
			</div>
		)
	}
}