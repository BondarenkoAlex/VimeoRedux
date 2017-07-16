import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment from './environment';
import categories from './categories';
import subcategories from './subcategories';
import playlists from './playlists';
import videos from './videos';

const rootReducer = combineReducers({
  router: routerReducer,
  environment,
  categories,
  subcategories,
  playlists,
  videos,
});

export default rootReducer;
