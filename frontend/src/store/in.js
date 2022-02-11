import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default new Vuex.Store({
  state: {
    formMessage: 'value',
    // userInfo: {
    //   userId: '',
    //   token: '',
    // },
    formLogin: '',
    messageLogin: '',
  },
  mutations: {
    setFormMessage: (state, formMessage) => {
      state.formMessage = formMessage;
    },
    setUserInfo: (state, formLogin) => {
      state.userInfo = formLogin;
    },
    setMessageLogin: (state, messageLogin) => {
      state.messageLogin = messageLogin;
    },
  },
  actions: {
    signup: ({ commit }, formValues) => {
      commit;
      apiService
        .post('auth/signup', formValues)
        .then((res) => commit('setFormMessage', res.data.message))
        .catch((err) => commit('setFormMessage', err.data.error));
    },
    login: ({ commit }, formLogin) => {
      commit;
      apiService.defaults.headers.common['authorization'] = '';
      apiService
        .post('auth/login', formLogin)
        .then((res) => {
          if (!res.data.token) {
            commit('setMessageLogin', 'Erreur');
          } else {
            commit('setMessageLogin', 'Vous êtes connecté');
            commit('setUserInfo', res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            apiService.defaults.headers.common['authorization'] =
              'Bearer ' + res.data.token;
          }
        })
        .catch(() => commit('setMessageLogin', 'Error'));
    },
  },
  modules: {},
});
