import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment from './environment';
import categories from './categories';
import subcategories from './subcategories';
import playlists from './playlists';
import videos from './videos';
import users from './users';

const rootReducer = combineReducers({
  router: routerReducer,
  environment,
  categories,
  subcategories,
  playlists,
  videos,
  users,
});

export default rootReducer;
