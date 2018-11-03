import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Modal';

class Signup extends React.Component {
    state ={ 
      mounted: false 
    };
    
    componentDidMount() {
        this.setState({ mounted: true });
    };
    
    handleSubmit(e) {
        this.setState({ mounted: false });
        e.preventDefault();
    };

    render() {
        var child 
        if(this.state.mounted) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }
        
        return(
            <div className="App">
                <ReactCSSTransitionGroup 
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {child}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
};

export default Signup;