// alurapic/src/main.js

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';
import './assets/js/teste.js';
import 'bootstrap/dist/js/bootstrap.js';

import { routes } from './routes';

import './directives/Transform';

// importando o VeeValidate 
import VeeValidate from 'vee-validate';
import msg from './pt_BR';

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes, 
  mode: 'history'
});

Vue.use(VueResource);

// http usará sempre o endereço abaixo

Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})