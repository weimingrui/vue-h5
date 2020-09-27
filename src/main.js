/*
 * @Author: Arthur
 * @Date: 2020-09-27 16:24:32
 * @LastEditors: Arthur
 * @LastEditTime: 2020-09-27 16:48:08
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router';

Vue.config.productionTip = false

Vue.use(VueRouter);

let router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
