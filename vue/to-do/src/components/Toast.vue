<template>
  <div class="toast" :class="{visible: visible}">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props: ['message'],
    data() {
      return {
        visible: false,
        interval: null
      }
    },
    created(){
      this.$on("show-toast", (m) => {
        console.log("show-toast received");
        this.showToast(m)
      })
    },
    watch: {
      message(){
        if(!this.visible){
          this.visible = true;
          this.interval = setInterval(()=>{this.visible = false; clearInterval(this.interval)}, 5000); //to hide the toast again after 5 seconds
        }
      }
    }
  }
</script>

<style scoped>
  .toast {
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #253044;
    color: #52e4c0;
    height: 49px;
    position: absolute;
    bottom: -50px;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }
  .toast h2 {
    height: 100%;
    line-height: 100%;
    white-space: nowrap;
  }
  .toast.visible{
    bottom: 0;
    opacity: 1;
  }

</style>
