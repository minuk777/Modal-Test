import React from "react"

class Modal extends React.Component {

	static defaultProps = {
		modalOn:false
	}

	render() {
		
		return(
			<div>{this.props.children}</div>
		);
	}
}

export default Modal;