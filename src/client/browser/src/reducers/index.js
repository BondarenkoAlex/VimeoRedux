import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment from './environment';
import categories from './categories';
import subcategories from './subcategories';

const rootReducer = combineReducers({
  router: routerReducer,
  environment,
  categories,
  subcategories,
});

export default rootReducer;
