import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import sunSigns from './sunSigns';
import compatibilities from './compatibilities';
import horoscopePostReducer from './horoscopePosts';
import zodiacListReducer from './zodiacLists';
import userReducer from './users';
import friendReducer from './friends'
import requestReducer from './requests';
import commentsReducer from './comments';
import likesReducer from './likes';

const rootReducer = combineReducers({
  session,
  sunSigns,
  compatibilities,
  horoscope_posts:horoscopePostReducer,
  zodiac_lists:zodiacListReducer,
  users: userReducer,
  friends: friendReducer,
  requests: requestReducer,
  comments: commentsReducer,
  likes: likesReducer
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
