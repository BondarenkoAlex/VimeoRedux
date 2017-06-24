import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
