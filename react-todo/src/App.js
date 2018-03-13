import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Toast from './components/Toast/Toast'
import Task from './components/Task/Task'
import {connect} from 'react-redux'
import {addTask} from './store/actions';

class App extends Component {

    renderTaskList(props){
        console.log("rendering list");
        console.log(props.taskList);
        return props.taskList.map((task, index) =>(<Task name={task.name} done={task.done} key={task.name+index} id={index}/>));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hello world task manager</h1>
                </header>
                <div id={'task-wrapper'}>
                    {this.renderTaskList(this.props)}
                </div>
                <button id={"add-button"} onClick={this.props.addTask} ><b>Add a task</b></button>
                <Toast/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {taskList: state.tasks};

};

const mapDispatchToProps = (dispatch) => {
    return {
       async addTask() {
           let name = await prompt('Please enter the taskname');
           if (name) {
               dispatch(addTask({name: name, done: false}));
           }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
