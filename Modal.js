import React from "react"

class Modal extends React.Component {

	static defaultProps = {
		modalOn : false,
		//bgColor : '#FAFAFA',
		mode : 'default' 
	}

	static propTypes = {
		modalOn : React.PropTypes.bool.isRequired,
		//bgColor : React.PropTypes.string,
		mode : React.PropTypes.string
	}
	
	constructor(props) {
		super(props);
		this.state = {
			modalOpen : this.props.modalOn,
			//bgColor : this.props.bgColor,
			mode : this.props.mode,
			closeClick:false,
			closeBtnWrap:false,
			closeWrapHeight:45,
			closeBgcolor:''
		};

	}

	componentWillReceiveProps(nextProps) {	
		this.setState({
			modalOpen : nextProps.modalOn
		});
	}

	componentDidUpdate() {
		if(this.state.closeClick) { console.log("didup");
			this.setState({
				modalOpen : false,
				closeClick : false
			});
		}
	}

	closeHandle() {
		this.props.closeFunc();
		this.setState({
			closeClick : true
		});	
	}

	scrollHandle(event) {

		let elmnt = this.refs.modalWrap;
		let y = elmnt.scrollTop;

		if(y>0) {
			this.setState({
				closeBgcolor:"#121212"
			});
		}else{
			this.setState({
				closeBgcolor:""
			});
		}
		
	}

	render() {
		
		let opacity = typeof this.props.opacity === 'number' ? this.props.opacity : 1;
		
		let styles = {
			wrap : {
				common : {
					position : "fixed",
					width : "100%",
					height : "100%",
					top : 0,
					left : 0,
					padding : 0,
					display : "flex",
					//alignItems : "center",
					justifyContent : "center",
					overflowY : "auto"
				},
				custom : {
					backgroundColor : this.state.mode==='default' ? `rgba(18,18,18,${opacity})` : this.state.bgColor,
				},
				child : {
					width : "100%",

				}
			},
			btn : {
				common : {
					position : "fixed",
					borderRadius : 3,
					border : "1px solid #08c",
					fontSize : 16,
					color : "#08c",
					textAlign : "right",
					top : 10,
					right : 10,
					padding : 3,
				},
				wrap : {
					position : "fixed",
					backgroundColor : this.state.closeBgcolor,
					opacity : "0.8",
					top : 0,
					left : 0,
					width : "100%",
					height : this.state.closeWrapHeight
				}
			}
		};

		return(
			<div>
				{this.state.modalOpen &&
				<div style={{...styles.wrap.common, ...styles.wrap.custom}} onScroll={()=>this.scrollHandle(event)} ref="modalWrap" >
					<div style={styles.btn.wrap}>
						<div style={styles.btn.common} onClick={()=>this.closeHandle()} >Close</div>
					</div>
					<div style={styles.wrap.child}>{this.props.children}</div>
				</div>}
			</div>
		);
	}
}

export default Modal;