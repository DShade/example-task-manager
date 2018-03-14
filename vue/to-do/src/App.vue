<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TaskManager/>
  </div>
</template>

<script>
  import TaskManager from './components/TaskManager'

  export default {
    name: 'App',
    components: {
      TaskManager: TaskManager
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  html{
    background-color: #253044;
  }
</style>
