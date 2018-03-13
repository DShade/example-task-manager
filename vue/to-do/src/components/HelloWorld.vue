<template>
  <div class="content">
    <h1>Hello world task manager</h1>

    <div id="task-wrapper">
      <transition-group name="list" tag="div">
        <Task v-for="(task, index) in tasks" :key="index" :name="task.name" :done="task.done" :index="index"/>
      </transition-group>
    </div>
    <button id="add-button" @click="addTask"><b>Add a task</b></button>

    <Toast/>
  </div>
</template>

<script>
  import Toast from './Toast'
  import Task from './Task'

  export default {
    name: 'HelloWorld',
    methods: {
      addTask(){
        this.$store.dispatch("tasks/addTask")
      }
    },
    computed: {
      tasks(){
        return this.$store.getters['tasks/getTasks'];
      }
    }
    , components: {Toast, Task}
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

  .list-enter-active, .list-leave-active {
    opacity: 1;
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>
