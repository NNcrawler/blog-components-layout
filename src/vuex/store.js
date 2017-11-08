import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000/';

export default new Vuex.Store({
  state: {
    detailPost: null,
    isLogin: false,
    userId: null,
  },
  mutations: {
    /* eslint-disable */
    changeDetailPost(state, id) {
      axios.get(`/post/detail/${id}`)
        .then((response) => {
          state.detailPost = response.data.data;
        })
        .catch((err) => {
          console.log(err);
          state.detailPost = err;
        });
    },
    loginChecker(state) {
      if (window.localStorage.getItem('token')) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    userIdChecker(state) {
      state.userId = window.localStorage.getItem('user_id');
    },
    /* eslint-enable */
  },
});
