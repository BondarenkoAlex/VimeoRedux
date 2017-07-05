import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
