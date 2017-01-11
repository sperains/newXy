import React , {Component} from 'react';
import Modal from 'react-modal';
import './TraningItemEdit.scss';


const customStyles = {
	content : {
		top  : '72px',
		left  : '50%',
		right : 'auto',
		bottom : 'auto',
		marginRight : '-50%',
		transform  : 'translate(-50%, 0)',
		padding : '0' ,
		border : 'none' ,
		borderRadius : 'none' 
	},
	overlay : {
		position  : 'fixed',
		top  : 0,
		left  : 0,
		right  : 0,
		bottom  : 0,
		backgroundColor : 'rgba(0, 0, 0, 0.6)'
	},

};

const editorStyles = {
	width : '505px' , 
	height : '200px' , 
	outline : 'none' , 
	borderRadius : '5px' , 
	border : 'solid 1px #D3D3D3' , 
	overflowY : 'auto',
	paddingLeft : '10px' ,
	paddingTop : '5px' ,
	fontSize : '14px'
}



export default class TraningItemEdit extends Component{
	constructor(props) {
		super(props);
		this.state = {
			title : '',
			filename : '123.mp3',
			traningItemInfo : {}
		}
		this.editorInit = this.editorInit.bind(this);
		this.onAudioChange = this.onAudioChange.bind(this);
		this.onNewAudioUploadClick = this.onNewAudioUploadClick.bind(this);
		this.onDelAudioUploadClick = this.onDelAudioUploadClick.bind(this);
	}

	componentDidMount() {
		

		this.editorInit();
	}


	componentWillUnmount() {
		this.editorObj.destroy();
	}

	editorInit(){
		let Editor = require('medium-editor');
		let editorObj = new Editor('.editable'  ,{
			buttonLabels: 'fontawesome',
			toolbar: {
				buttons: ['bold', 'italic', 'quote' , 'justifyLeft' , 'justifyCenter'],
				diffLeft: 25,
				diffTop: 10,
			},
			placeholder: {
				text: '请输入背景文字...',
				hideOnClick: false
			}
		})
		// editorObj.setContent(`<p>hahahah</p>`)
		this.editorObj = editorObj;
		editorObj.subscribe('editableInput', function (event, editable) {

		});
	}

	

	onAudioChange(filename , e ){
		console.log(arguments);
		console.log(e.target.files[0]);
		this.setState({
			filename : e.target.files[0].name
		})
	}

	// 新建一行背景音乐设置
	onNewAudioUploadClick(item , index){
		console.log('new' , item);
	}

	// 删除当前行背景音乐
	onDelAudioUploadClick(item ,index){
		console.log('delete' , item);
		let content = this.props.content;
	}


	
	render() {
		const { content , modalIsOpen} = this.props;
		return (
			<Modal
			isOpen={modalIsOpen}
			style={customStyles}
			contentLabel="Example Modal"
			>
				<div className="traningitem-editwrap">
					<div className="traningitem-close" onClick={this.props.onClose}></div>
					<div className="traningitem-edit-image-upload">
					</div>
					<div className="traningitem-edit-form">

						{
							content.items.map( (item , index)=>{
								switch(item.type){
									case 1 : return (<FormItem key={index} title={item.title} checked={item.active} />); 
									case 2 : return (
														<AudioUpload key={index}
														title={item.title} 
														checked={true} 
														type={ content.items[index+1].type == 2 ? 2 : 1}
														onChange={this.onAudioChange}
														onClick={content.items[index+1].type == 2 ? ()=>this.onDelAudioUploadClick(item,index) : ()=>this.onNewAudioUploadClick(item,index)}
														filename={this.state.filename}
														/>
													);
									case 3 : return (
												<div key={index} className="traningitem-edit-formitem traningitem-edit-form-item-bgtext">
													<div className="traningitem-edit-form-item-checkbox"></div>
													<div className="traningitem-edit-form-item-label">背景文字<span></span></div>
													<div className="editable" style={editorStyles}></div>
												</div>
												);
								}
							})
						}

						

						
					</div>
					<div className="traningitem-edit-options">
						<div className="traningitem-edit-options-btn">完成</div>
					</div>
				</div>
			</Modal>
		)
	}
}

class FormItem extends Component{

	constructor(props) {
		super(props);
	}
	render() {
		const {title , checked} = this.props;
		return (
			<div className="traningitem-edit-formitem">
				<div className={checked ? "traningitem-edit-form-item-checkbox traningitem-edit-form-item-checkbox-checked" : 'traningitem-edit-form-item-checkbox'}></div>
				<div className="traningitem-edit-form-item-label">{title}<span></span></div>
				<input />
			</div>
		)
	}
}

class AudioUpload extends Component{
	constructor(props) {
		super(props);
		this.onAddAudioClick = this.onAddAudioClick.bind(this);
	}
	onAddAudioClick(file){
		file.click();
	}
	render() {
		const {title , checked , type , onClick  , onChange , filename } = this.props;
		return (
			<div className="traningitem-edit-formitem">
				<div className={checked ? "traningitem-edit-form-item-checkbox traningitem-edit-form-item-checkbox-checked" : 'traningitem-edit-form-item-checkbox'}></div>
				<div className="traningitem-edit-form-item-label">{title}<span></span></div>
				<div className="traningitem-edit-form-item-addmusic">
					<div onClick={()=>this.onAddAudioClick(this.refs.fileupload)} className="traningitem-edit-form-item-addmusic-input">
						{
							!filename ? 
							<div className="addmusic-input-wrap">
								<div className="btn-plus"></div>
								<span>添加音频</span>
							</div>
							: <span>{filename}</span>
						}
						
					</div>
					<div className="traningitem-edit-form-item-music-btns traningitem-edit-form-item-music"></div>
					{
						type == 1 
						? 
						<div onClick={onClick} className="traningitem-edit-form-item-music-btns traningitem-edit-form-item-music-add"></div>
						:
						<div onClick={onClick} className="traningitem-edit-form-item-music-btns traningitem-edit-form-item-music-delete"></div>
					}
				</div>
				<input type="file" ref="fileupload" onChange={onChange.bind(this,title)} style={{display : 'none'}}/>
			</div>
		)
	}
}