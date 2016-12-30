
import React , {Component} from 'react';
import './BlockStyleControls.scss';
import StyleButton from './StyleButton';

export default class BlockStyleControls extends Component{

	constructor(props) {
		super(props);
		
	}

	render() {
		const {editorState} = this.props;
		const selection = editorState.getSelection();
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(selection.getStartKey())
			.getType();
		return (

			<div className="RichEditor-controls">
				{
					this.props.blockTypes.map( (type)=>{
						return (
							<StyleButton 
								key={type.label}
								active={type.style === blockType}
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