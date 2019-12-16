import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect_id: "",
    user_name: "",
    user_email: "",
    user_token: ""
  },
  mutations: {
    set_new_connect_id(state, payload) {
      state.connect_id = payload.connect_id;
      state.user_name = payload.user_name;
      state.user_token = payload.user_token;
      state.user_email = payload.user_email;
    }
  },
  actions: {},
  modules: {}
});
