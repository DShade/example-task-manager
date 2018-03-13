import React, {Component} from 'react';
import './Toast.css'
import {connect} from 'react-redux'


class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
        this.interval = null;
    }

    render() {
        return (
            <div id={'toast-wrapper'}>
                <div className={`toast ${this.state.visible ? 'visible' : ''}`}>
                    <h2>{this.props.msg}</h2>
                </div>
            </div>
        )
    }

    componentWillReceiveProps(next){
        if(!this.state.visible){
            this.setState({visible: true});
            this.interval = setInterval(() => {
                this.setState({visible: false});
                clearInterval(this.interval);
            }, 2000);
        }
        return next;
    }
}

const mapStateToProps = (state) => {
    return {
        msg: state.toast.msg
    };

};



export default connect(mapStateToProps, null)(Toast);