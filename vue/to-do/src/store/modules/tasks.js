export default {
  namespaced: true,
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
      persist(state.tasks);
    },
    async REMOVE_TASK(state, index) {
      if (await confirm(`do you really want to remove the task '${state.tasks[index].name}'?`)) {
        state.tasks.splice(index, 1);
        persist(state.tasks);
      }

    },
    INIT(state, tasks) {
      state.tasks = tasks;
    },
    TOGGLE(state, index) {
      let context = state.tasks[index];
      state.tasks[index].done = !context.done;
      persist(state.tasks);
    }
  },
  actions: {
    async addTask({commit}) {
      let name = await prompt('Please enter the taskname');
      if (name) {
        commit('ADD_TASK', {name: name, done: false});
      }
    },
    deleteTask({commit}, index) {
      console.log('querying to remove task with id: ' + index);
      commit('REMOVE_TASK', index);
    },
    init({commit}) {
      commit('INIT', retrieve());
    },
    toggle({commit}, index) {
      commit('TOGGLE', index);
    }
  },
  getters: {
    getTasks: state => state.tasks
  }
}


function persist(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function retrieve() {
  let out = localStorage.getItem('tasks');
  if (out) {
    return JSON.parse(out);
  }
  return [];
}
