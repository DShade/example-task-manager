export default {
  namespaced: true,
  state: {
    showing: false,
    msg: ""
  },
  mutations:{
    SET_MSG(state, msg){
      state.msg = msg;
      if(!state.showing){
        state.showing = true;
        let x = setInterval(()=>{
          state.showing = false;
          clearInterval(x);
        }, 2000);
      }
    }
  },
  actions: {
    setMsg({commit}, msg){
      commit("SET_MSG", msg);
    }
  },
  getters: {
    getMsg: state => state.msg,
    isShowing: state => state.showing
  }
}
