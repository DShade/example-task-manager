export function addTask(task){
    return {type: "ADD_TASK", payload: task}
}

export function removeTask(id) {
    return {type: 'REMOVE_TASK', payload: id}
}

export function toggleTask(id){
    return {type: 'TOGGLE_TASK', payload: id}
}