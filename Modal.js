import React from "react"

class Modal extends React.Component {

	static defaultProps = {
		modalOn : false
	}

	static propTypes = {
		modalOn : React.PropTypes.bool.isRequired
	}

	render() {
		
		return(
			<div>{this.props.children}</div>
		);
	}
}

export default Modal;