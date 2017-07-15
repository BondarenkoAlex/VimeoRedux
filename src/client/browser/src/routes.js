//eslint indent: "error"
//jscs:disable validateIndentation
import AppLayout from './components/layout/AppLayout';
import CategoryContainer from './containers/ContentContainer/CategoryContainer';
import SubcategoryContainer from './containers/ContentContainer/SubcategoryContainer';
import PlaylistContainer from './containers/ContentContainer/PlaylistContainer';
import VideoContainer from './containers/ContentContainer/VideoContainer';
//import PlayerBreadContentLayout from './components/layout/PlayerBreadContentLayout';

const routes = [{
    component: AppLayout,
    routes: [{
        path: '/',
        exact: true,
        component: CategoryContainer,
    }, {
        path: '/search',
        exact: true,
        component: null,
        routes: [{
            path: '/search/????',
            component: null,
          //можно подключать разные контейнеры и спускать в компоненты нужные данные
          // из раутера (Route) мы коннектимся к нужным данным и спускаем дальше
        }, ],
    }, {
        path: '/favorites',
        component: null,
        routes: [{
            path: '/favorites/????',
            component: null,
        }, ],
    },{
        path: '/:category/:subcategory/:idVideo',
        exact: true,
        component: VideoContainer,
        routes: [],
    },{
        path: '/:category/:subcategory',
        exact: true,
        component: PlaylistContainer,
        routes: [],
      },{
        path: '/:category',
        exact: true,
        component: SubcategoryContainer,
        routes: [],
    }, ],
}, ];

export { routes as default };
