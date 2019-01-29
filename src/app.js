import Vue from 'vue';

import App from './App.vue';

import router from './routes/router';
import store from './store';

const app = new Vue({
  router,
  store,
  render: h => h(App),
});

export default app;
