import React from 'react';


class Input extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div className="Input">
                <input 
                    id={this.props.name}
                    autoComplete="false"
                    required
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />  
                <label htmlFor={this.props.name}></label>
            </div>
        )};
};

export default Input;