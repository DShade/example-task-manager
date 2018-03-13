import {createStore} from 'redux';

const todoApp = (state = retrieveData(), action) => {
    switch(action.type){
        case 'ADD_TASK':

            let task = action.payload;
            let addTemp = {...state};
            console.log(`state cloned : ${JSON.stringify(addTemp)}`);
            addTemp.tasks = [...addTemp.tasks, task];
            addTemp.toast.msg = `new task '${task.name}' created!`;
            console.log(`state altered : ${JSON.stringify(addTemp)}`);
            persistData(addTemp.tasks);
            return addTemp;
        case 'REMOVE_TASK':
            let idToRemove = action.payload;
            let removeTemp = {...state};
            removeTemp.toast.msg = `task '${removeTemp.tasks[idToRemove].name}' deleted!`;
            removeTemp.tasks = [...removeTemp.tasks];
            removeTemp.tasks.splice(idToRemove, 1);
            persistData(removeTemp.tasks);
            return removeTemp;
        case 'TOGGLE_TASK':
            let id = action.payload;
            let temp = {...state};
            temp.tasks = [...temp.tasks];
            temp.tasks[id].done = !temp.tasks[id].done;
            temp.toast.msg = `task '${temp.tasks[id].name}' has been marked as '${temp.tasks[id].done ? 'done' : 'not done'}'!`;
            state = temp;
            persistData(temp.tasks);
            return temp;
        default:
            console.log("no valid action type")
    }
    console.log("returning new state");
    return state;
};

function persistData(tasks){
    localStorage.setItem("react-tasks", JSON.stringify(tasks));
}

const retrieveData = () => {
    let out = localStorage.getItem("react-tasks");
    let tasks = [];
    if(out){
        tasks = JSON.parse(out);
    }
    return {tasks: tasks, toast: {msg: ""}};
};

export let store = createStore(todoApp);

