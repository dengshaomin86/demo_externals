import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Antd from '../views/Antd.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/antd',
    name: 'Antd',
    component: Antd,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
