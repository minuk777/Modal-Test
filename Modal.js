import React from "react"

class Modal extends React.Component {

	render() {
		
		return(
			<div>{this.props.children}</div>
		);
	}
}

export default Modal;