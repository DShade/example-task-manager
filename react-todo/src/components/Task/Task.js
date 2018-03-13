import React, {Component} from 'react'
import './Task.css'
import {removeTask, toggleTask} from '../../store/actions';
import {connect} from 'react-redux'


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name, done: props.done}
    }

    render() {
        return (
            <div className={'Task'}>
                <h3>{this.state.name}</h3>
                <div className={'delete badge'} onClick={() => this.props.removeTask(this.state.name, this.props.id)}>
                    <b>✖</b>
                </div>
                <input type={'checkbox'} checked={this.props.done}
                       onChange={() => this.props.toggleDone(this.props.id)}/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        async removeTask(name, id) {
            if (await confirm(`do you really want to remove the task '${name}'?`)) { //eslint-disable-line no-restricted-globals
                dispatch(removeTask(id))
            }
        },
        toggleDone(id) {
            dispatch(toggleTask(id))
        }
    }
};


export default connect(null, mapDispatchToProps)(Task);