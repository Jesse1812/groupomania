import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import post from './modules/post';
import comment from './modules/comment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, post, comment },
  // post, comment à ajouter
});
