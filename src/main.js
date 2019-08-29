import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store/store';

// axios setting
axios.defaults.baseURL = 'https://vue-stock-trader-d3528.firebaseio.com/';

Vue.config.productionTip = false;

// 全局过滤器
Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
