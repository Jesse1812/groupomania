import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import Profil from '../views/Profil.vue';
// import auth from '../middleware/auth';

Vue.use(VueRouter);
// function log({ next, to }) {
//   console.log(to.name);

//   return next();
// }
// function ash({ next, router }) {
//   if (!localStorage.getItem('token')) {
//     return router.push({ name: '/' });
//   }

//   return next();
// }
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
    // meta: {
    //   middleware: auth,
    // },
    // meta: { middleware: [ash, log] },
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    // meta: { middleware: [ash, log] },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
