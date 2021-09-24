import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import dataReducer from './data';
import horoscopePostReducer from './horoscopePosts';
import zodiacListReducer from './zodiacLists';
const rootReducer = combineReducers({
  session,
  data: dataReducer,
  horoscope_posts:horoscopePostReducer,
  zodiac_lists:zodiacListReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
