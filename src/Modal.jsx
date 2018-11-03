import React from 'react';
import Input from './Input';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
		return (
			<div className="appModal">
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="name"
						type="text"
						placeholder="Enter Full Name" />
					<Input
						id="email"
						type="email"
						placeholder="Enter Email Address" />
					<Input
						id="password"
						type="password"
						placeholder="Enter Password" />
					<button>
						Log in <i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>
		)}
};

export default Modal;