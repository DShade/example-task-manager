<template>
  <div class="task">
    <h3>{{name}}</h3>
    <input type="checkbox" @click="handleClick"/>
  </div>
</template>

<script>
  export default {
    props: ['name', 'done', 'index'],
    name: 'task',
    methods: {
      handleClick() {
        this.$parent.$emit('show-toast', this.index, this.name, this.done);
        console.log(`sending this.$parent.$emit('show-toast', ${this.index}, ${this.name}, ${this.done}`);
      }
    }
  }
</script>

<style scoped>
  .task {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 7px;
    background-color: #f1f1f1;
    box-shadow: -3px 5px 8px 4px #00000038;
    width: 800px;
  }

  input {
    height: 30px;
    width: 30px;
  }

</style>
