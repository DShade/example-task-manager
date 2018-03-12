<template>
  <div class="content">
    <h1>Hello world task manager</h1>
    <div id="task-wrapper">
      <Task v-for="(task, index) in tasks" :key="index" :name="task.name" :done="task.done" :index="index"/>
    </div>
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
        msg: 'Welcome to Your Vue.js App',
        tasks: [{name: 'This is a task', done: false}],
        toastMessage: ' '
      }
    },
    methods: {
      showToast(name, newState) {
        console.log('showToast fired');
        let message = 'name ';
        message += newState ? 'is now marked as \'not done\'' : 'is now marked as \'done\'';
        this.toastMessage = message;
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
      })
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
  }

  #task-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
