import React , {Component} from 'react';
import { Tag, Input, Tooltip, Button } from 'antd';
import './EditableTagGroup.scss';

export default class EditableTagGroup extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tags: ['标签一', '标签二', '标签三'],
			inputVisible: false,
			inputValue: '',
		}
		this.showInput = this.showInput.bind(this);
		this.saveInputRef = this.saveInputRef.bind(this);
		this.handleInputConfirm = this.handleInputConfirm.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleClose(removedTag) {
		const tags = this.state.tags.filter(tag => tag !== removedTag);
		console.log(tags);
		this.setState({ tags });
	}

	showInput(){
		this.setState({ inputVisible: true }, () => this.input.focus());
	}

	handleInputChange(e){
		this.setState({ inputValue: e.target.value });
	}

	handleInputConfirm(){
		const state = this.state;
		const inputValue = state.inputValue;
		let tags = state.tags;
		if (inputValue && tags.indexOf(inputValue) === -1) {
			tags = [...tags, inputValue];
		}
		console.log(tags);
		this.setState({
			tags,
			inputVisible: false,
			inputValue: '',
		});
	}

  saveInputRef(input){this.input = input}

	render() {
		 const { tags, inputVisible, inputValue } = this.state;
		 return (
		 	<div className="editable-tag-group">
				{
					tags.map((tag, index) => {
						const isLongTag = tag.length > 10;
						const tagElem = (
							<Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
							{isLongTag ? `${tag.slice(0, 10)}...` : tag}
							</Tag>
						);
						return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
					})
				}
				{
					inputVisible && (
						<Input
							ref={this.saveInputRef}
							type="text" size="small"
							style={{ width: 78 }}
							value={inputValue}
							onChange={this.handleInputChange}
							onBlur={this.handleInputConfirm}
							onPressEnter={this.handleInputConfirm}
							/>
					)
				}
				{!inputVisible && <Button  type="dashed" onClick={this.showInput}>+ 新建标签</Button>}
		 	</div>
		 )
	}

}
