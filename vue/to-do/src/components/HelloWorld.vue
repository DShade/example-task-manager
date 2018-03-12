<template>
  <div class="content">
    <h1>Hello world task manager</h1>

    <div id="task-wrapper">
      <transition-group name="list" tag="div">
        <Task v-for="(task, index) in tasks" :key="index" :name="task.name" :done="task.done" :index="index"/>
      </transition-group>
    </div>
    <button id="add-button" @click="addTask()"><b>Add a task</b></button>

    <Toast :message="toastMessage"/>
  </div>
</template>

<script>
  import Toast from './Toast'
  import Task from './Task'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        tasks: [{name: 'This is a task', done: false},
          {name: 'another sample task', done: true}],
        toastMessage: ' '
      }
    },
    methods: {
      showToast(name, newState) {
        console.log('showToast fired');
        let message = 'name ';
        message += newState ? 'is now marked as \'not done\'' : 'is now marked as \'done\'';
        this.toastMessage = message;
      },
      async addTask() {
        let name = await prompt('Please enter the taskname');
        if (name) {
          this.tasks.push({name: name, done: false});
        }
      },
      async removeTask(index) {
        console.log("querying to remove task with id: "+index);
        if(await confirm(`do you really want to remove the task '${this.tasks[index].name}'?`)){
          tasks.splice(index,1)
        }
      }
    },
    created() {
      this.$on('show-toast', (index, name, done) => {
        this.showToast(name, done);

        //creating a copy of the tasks array, since it needs to be replaced with a new instance for vue
        //to recognize changes
        let tasksCopy = [...this.tasks];
        tasksCopy[index].done = !done;

        this.tasks = tasksCopy;
      });

      this.$on('delete-task', (index) => {
        console.log("delete-task received");
        this.removeTask(index);
      });
    }
    ,
    components: {Toast, Task}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    overflow: hidden;
    height: 100%;
    width: 100%;
    color: white;
  }

  #task-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }

  h1, h2 {
    font-weight: normal;
  }

  #add-button {
    margin-bottom: 80px;
    width: 20%;
    height: 50px;
    background-color: #52e4c0;
    color: #253044;
    border: none;
  }

  #add-button:hover {
    background-color: #59fad5;
    cursor: pointer;
  }

  .list-enter-active, .list-leave-active{
    opacity: 1;
    transition: all 1s;
  }

  .list-enter, .list-leave-to{
    opacity: 0;
  }
</style>
