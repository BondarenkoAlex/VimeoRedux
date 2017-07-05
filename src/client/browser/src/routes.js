import App from './containers/App';

const routes = [{
  component: App,
  routes: [{
    path: '/search',
    exact: true,
    component: null,
    routes: [{
      path: '/search/????',
      component: null,
    },],
  }, {
    path: '/favorites',
    component: null,
    routes: [{
      path: '/favorites/????',
      component: null,
    },],
  }, {
    path: '/:categories',
    component: null,
    routes: [{
      path: '/:categories/:subcategories',
      component: null,
      routes: [{
        path: '/:categories/:subcategories/:idVideo',
        component: null,
      },],
    },],
  },],
},];

export { routes as default };
