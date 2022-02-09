import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import Profil from '../views/Profil.vue';
import auth from '../middleware/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: {
      middleware: auth,
    },
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    meta: {
      middleware: auth,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
