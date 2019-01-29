import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexComponent from '../views/IndexComponent.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: IndexComponent }],
});

export default router;
