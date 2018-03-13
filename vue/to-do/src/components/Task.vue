<template>
  <div class="task">
    <h3>{{name}}</h3>
    <input type="checkbox" @click="handleCheckerClick" v-model="isChecked"/>
    <div class="delete badge" @click.prevent="handleDelete"><b>✖</b></div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'done', 'index'],
    data(){
      return{
        isChecked: this.done
      }
    },
    name: 'task',
    methods: {
      handleCheckerClick() {
        console.log(this.done);
        this.$store.dispatch("tasks/toggle", this.index);
        let message = this.name ;
        this.isChecked = !this.isChecked;
        message += !this.isChecked ? ' is now marked as \'not done\'' : ' is now marked as \'done\'';
        this.$store.dispatch("toast/setMsg", message);
      },
      handleDelete() {
        this.$store.dispatch("tasks/deleteTask", this.index);
      }
    }
  }
</script>

<style scoped>
  .task {
    padding: 7px;
    background-color: #f1f1f1;
    box-shadow: -3px 5px 8px 4px #00000038;
    width: 800px;
    position: relative;
    color: black;
    height: 50px;
    margin-top: 25px
  }

  .task h3{
    width: 50%;
    position: absolute;
    left: 25px;
    text-align: left;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: 20px;
  }

  input {
    width: 25px;
    height: 25px;
    top: 0;
    position: absolute;
    bottom: 0;
    margin-top: auto;
    right: 25px;
    margin-bottom: auto;
  }
  .badge{
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    color: white;
    line-height: 20px;
    cursor: pointer;
  }

</style>
