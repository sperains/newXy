import React , { Component } from 'react';
import { Editor , EditorState , ContentState ,  RichUtils , Modifier , convertToRaw , convertFromHTML  } from 'draft-js';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import {stateToHTML} from 'draft-js-export-html';
import './RichEditor.scss';

const BLOCK_TYPES = [
	{label: 'H1', style: 'header-one'},
	{label: 'H2', style: 'header-two'},
	{label: 'H3', style: 'header-three'},
	{label: 'H4', style: 'header-four'},
	{label: 'H5', style: 'header-five'},
	{label: 'H6', style: 'header-six'},
	{label: 'Blockquote', style: 'blockquote'},
	{label: 'UL', style: 'unordered-list-item'},
	{label: 'OL', style: 'ordered-list-item'},
	{label: 'Code Block', style: 'code-block'},

      ];

var INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'},
	{label: 'Monospace', style: 'CODE'},

];

export default class RichEditor extends Component{

	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		};
		this.onChange = this.onChange.bind(this);
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
		this.onBoldClick = this.onBoldClick.bind(this);
		this.focus = () => this.refs.editor.focus();		//聚焦编辑框
		this.toggleBlockType = (type) => this._toggleBlockType(type);
		this.toggleInlineStyle= (style) =>this._toggleInlineStyle(style);
		this.convertContentFromHTML = this.convertContentFromHTML.bind(this);
	}

	componentDidMount() {
		let str = `<h1>很快就会看见好看</h1>
<blockquote>发神经的李开复</blockquote>`;
		this.convertContentFromHTML(str);
	}

	onChange(editorState){
		let content = editorState.getCurrentContent();
		this.setState({editorState})
	}

	convertContentFromHTML(markup){
		const blocksFromHTML = convertFromHTML(markup);
		const state = ContentState.createFromBlockArray(blocksFromHTML);
		this.setState({
			editorState: EditorState.createWithContent(state),
		});
	}

	// 加粗
	onBoldClick(e){
		e.preventDefault();
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	}

	_toggleBlockType(blockType) {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState,blockType));
	}

	_toggleInlineStyle(inlineStyle) {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,inlineStyle));
	}

	// 加入快捷键
	handleKeyCommand(command) {
		const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
		if (newState) {
		this.onChange(newState);
		return 'handled';
		}
		return 'not-handled';
	}

	render() {
		const editorState = this.state.editorState;
		const common = {
			display : 'inline-block',
			width : '100%',
		}
		const styleMap = {
			'CENTER': Object.assign(common , {textAlign: 'center'}),
		}

		
		return (
			<div className="RichEditor-wrap" onClick={this.focus}>
				<BlockStyleControls 
					editorState={editorState}
					onToggle={this.toggleBlockType}  
					blockTypes={BLOCK_TYPES}
				/>
				<InlineStyleControls 
					editorState={editorState}
					onToggle={this.toggleInlineStyle} 
					inlineTypes={INLINE_STYLES} 
				/>
				<Editor ref="editor" editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
			</div>
		)
	}


}

