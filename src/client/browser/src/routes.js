// jscs:disable requireSpaceAfterComma
import AppLayout from './components/layout/AppLayout';
import CategoryContainer from './containers/ContentContainer/CategoryContainer';
import SubcategoryContainer from './containers/ContentContainer/SubcategoryContainer';
import PlaylistContainer from './containers/ContentContainer/PlaylistContainer';
import VideoContainer from './containers/ContentContainer/VideoContainer';
import { PARAM } from './constants/common';

const project = require('../../../../webpack/project.config.js');

const publicPath = project.publicPath;

const routes = [{
  component: AppLayout,
  routes: [{
    path: `${publicPath}`,
    exact: true,
    component: CategoryContainer,
  }, {
    path: `${publicPath}search`,
    exact: true,
    component: null,
    routes: [{
      path: `${publicPath}search/????`,
      component: null,
      //можно подключать разные контейнеры и спускать в компоненты нужные данные
      // из раутера (Route) мы коннектимся к нужным данным и спускаем дальше
    },],
  }, {
    path: `${publicPath}favorites`,
    component: null,
    routes: [{
      path: `${publicPath}favorites/????`,
      component: null,
    },],
  }, {
    path: `${publicPath}:${PARAM.CATEGORY}/:${PARAM.SUBCATEGORY}/:${PARAM.ID_VIDEO}`,
    exact: true,
    component: VideoContainer,
    routes: [],
  }, {
    path: `${publicPath}:${PARAM.CATEGORY}/:${PARAM.SUBCATEGORY}`,
    exact: true,
    component: PlaylistContainer,
    routes: [],
  }, {
    path: `${publicPath}:${PARAM.CATEGORY}`,
    exact: true,
    component: SubcategoryContainer,
    routes: [],
  },],
},];

// const routes = [{
//   component: AppLayout,
//   routes: [{
//     path: '/',
//     exact: true,
//     component: CategoryContainer,
//   }, {
//     path: '/search',
//     exact: true,
//     component: null,
//     routes: [{
//       path: '/search/????',
//       component: null,
//       //можно подключать разные контейнеры и спускать в компоненты нужные данные
//       // из раутера (Route) мы коннектимся к нужным данным и спускаем дальше
//     },],
//   }, {
//     path: '/favorites',
//     component: null,
//     routes: [{
//       path: '/favorites/????',
//       component: null,
//     },],
//   }, {
//     path: '/:category/:subcategory/:idVideo',
//     exact: true,
//     component: VideoContainer,
//     routes: [],
//   }, {
//     path: '/:category/:subcategory',
//     exact: true,
//     component: PlaylistContainer,
//     routes: [],
//   }, {
//     path: '/:category',
//     exact: true,
//     component: SubcategoryContainer,
//     routes: [],
//   },],
// },];

export { routes as default };
