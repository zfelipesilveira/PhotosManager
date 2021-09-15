// alurapic/src/main.js

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

import './directives/Transform';

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})