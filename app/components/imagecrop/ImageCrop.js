
import React , {Component} from 'react';
import './imageCrop.scss';


export default class ImageCrop extends Component{


	constructor(props) {
		super(props);
		this.state = {
			left : 0,
			top : 0,
			wrapImage : '' 
		}
		this.onMouseDown  = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onFileChange = this.onFileChange.bind(this);
	}

	onMouseDown(){
		this.refs.frame.addEventListener('mousemove' , this.onMouseMove)
	}

	onMouseMove(e){
		let me = this;
		let x = e.movementX + this.state.left;
		let y = e.movementY + this.state.top;
		if(x <= 0 ) x = -1 ;
		if(x>=140) x = 139 ;
		if(y<=0 ) y = -1 ;
		if(y>=30) y = 29 ;
		if(me.ctx){
			let widthRate = 1440 / 384;
			let heightRate = 900 / 240;
			me.ctx.drawImage(me.image , me.state.left *widthRate , me.state.top * eightRate , 210 * widthRate  , 210*heightRate , 0  , 0  , 1440 , 1000  );
		}
		this.setState({
			left : x ,
			top : y 
		})
	}

	onMouseUp(){
		this.refs.frame.removeEventListener('mousemove' , this.onMouseMove);

	}

	onFileChange(e){
		let me = this ;
		let file = e.target.files[0];
		console.log(file);
		let reader = new FileReader();
		reader.onload = ()=> {
			let url = reader.result;
			me.setState({wrapImage : url});
			let canvas = me.refs.canvas , ctx = canvas.getContext('2d'), image = new Image();	
			image.src = url ;
			console.log(image.width , image.height);
			me.ctx = ctx;

			me.image = image;
		}
		reader.readAsDataURL(file);
	}

	render() {

		let outerStyle = {
			width : '350px',
			height : '240px',
			border : 'solid 1px #fff',
		}

		let frameStyle = {
			width : '210px',
			height : '210px',
			border : 'solid 1px red',

		}

		return (
			<div>
				<input type="file" onChange={this.onFileChange} />
				
				<div ref="wrap" className='outerStyle' >
					<img src={this.state.wrapImage} height='240'/>
					<div className='frameStyle'
					style={{
						left : this.state.left,
						top : this.state.top
					}}
					 ref='frame' onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
						<div className="circle"></div>
					</div>
				</div>
				<canvas ref="canvas" style={{width : '350px' , height : '240px' }}></canvas>
			</div>
		)
	}
}