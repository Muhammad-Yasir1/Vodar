import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import spinnerReducer from './spinner_reducer';
import word_reducer from './word_reducer';
import login_reducer from './login_reducer';
export default () => {
  const rootReducer = combineReducers({
    spinner: spinnerReducer,
    word: word_reducer,
    login: login_reducer,
  });
  const middlewares = [thunk];
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  return store;
};
