import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () =>
        import(
          /* webpackChunkName: "portfolio" */ './components/portfolio/Portfolio.vue'
        )
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: () =>
        import(
          /* webpackChunkName: "stocks" */ './components/stocks/Stocks.vue'
        )
    }
  ]
});
