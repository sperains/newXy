import { Tag, Input, Tooltip, Button } from 'antd';

class EditableTagGroup extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tags: ['Unremovable', 'Tag 2', 'Tag 3'],
			inputVisible: false,
			inputValue: '',
		}
	}

	render() {
		 const { tags, inputVisible, inputValue } = this.state;
		 return (
		 	<div className="editable-tag-group">
		 		
		 	</div>
		 )
	}

}
