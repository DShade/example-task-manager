<template>
  <div id="toast-wrapper">
    <div class="toast" :class="{visible: visible}">
      <h2>{{message}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    created() {
      this.$on('show-toast', (m) => {
        console.log('show-toast received');
        this.showToast(m)
      })
    },
    computed: {
      visible() {
        return this.$store.getters['toast/isShowing'];
      },
      message() {
        return this.$store.getters['toast/getMsg'];
      }
    }
  }
</script>

<style scoped>
  #toast-wrapper {
    overflow: hidden;
    height: 49px;
    left: 0;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .toast {
    width: 100%;
    padding: 0;
    margin: 0;

    background-color: #52e4c0;
    color: #253044;
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

  .toast.visible {
    bottom: 0;
    opacity: 1;
  }

</style>
