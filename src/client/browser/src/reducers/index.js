import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment from './environment';
import categories from './categories';

const rootReducer = combineReducers({
  router: routerReducer,
  environment,
  categories,
});

export default rootReducer;
