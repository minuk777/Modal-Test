import React from "react"

class Modal extends React.Component {

	static defaultProps = {
		modalOn : false
	}

	static propTypes = {
		modalOn : React.PropTypes.bool.isRequired
	}
	
	constructor(props) {
		super(props);
		this.state = {
			modalOpen : this.props.modalOn,
			theme : 'white'
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			modalOpen : nextProps.modalOn
		});
	}

	closeHandle() {
		this.setState({
			modalOpen : false
		});
	}

	render() {
		
		let styles = {
			wrap : {
				common : {
					position : "fixed",
					width : "100%",
					height : "100%",
					top : 0,
					left : 0,
					padding : 10
				},
				white : {
					backgroundColor : "#FAFAFA"
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
					padding : 3
				}
			}
		};

		return(
			<div>
				{this.state.modalOpen &&
				<div style={{...styles.wrap.common, ...styles.wrap.white}}>
					<div style={styles.btn.common} onClick={()=>{this.closeHandle()}} >Close</div>
					<div>{this.props.children}</div>
				</div>}
			</div>
		);
	}
}

export default Modal;