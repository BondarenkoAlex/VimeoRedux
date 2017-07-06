//eslint indent: "error"
//jscs:disable validateIndentation
import AppLayout from './components/layout/AppLayout';
import PlayerBreadContentLayout from './components/layout/PlayerBreadContentLayout';

const routes = [{
    component: AppLayout,
    routes: [/*{
        path: '/',
        exact: true,
        component: PlayerBreadContentLayout,
    }, */ {
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
        path: '/:categories?/:subcategories?/:idVideo?',
        component: PlayerBreadContentLayout,
        routes: [{
            path: '/:categories/:subcategories',
            component: null,
            routes: [{
                path: '/:categories/:subcategories/:idVideo',
                component: null,
            }, ],
        }, ],
    }, ],
}, ];

export { routes as default };
