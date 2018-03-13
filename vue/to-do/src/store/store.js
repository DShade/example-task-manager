import Vuex from "vuex"
import tasks from './modules/tasks'
import toast from './modules/toast'
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    toast
  }
});
