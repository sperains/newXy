
import React , {Component} from 'react';
import './ImageUpload.scss';

export default class ImageUpload extends Component{
	constructor(props) {
		super(props);
	}

	onAddImageClick(){
		this.refs.image_upload.click();
		
	}

	render() {
		const {imageUrl , onChange} = this.props; 
		return (
			<div className="image-upload" style={this.props.style}>
				
				{
					!imageUrl 
					? 
					<div className="image-upload-add" onClick={this.onAddImageClick.bind(this)}>
						<span className="image-upload-add-icon">+</span>
						<span className="image-upload-add-text">添加活动图片</span>
					</div>
					 :
					<img className="image-upload-image"  src={imageUrl} onClick={this.onAddImageClick.bind(this)}/>
				}

				<input style={{display : 'none'}} ref='image_upload' type="file" onChange={onChange} />
				
			</div>
		)
	}
}


