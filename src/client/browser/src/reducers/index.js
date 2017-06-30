import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment from './environment';

const rootReducer = combineReducers({
  router: routerReducer,
  environment,
});

export default rootReducer;
