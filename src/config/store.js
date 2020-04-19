import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../api/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const configureStore = () => {
  const store = createStore(combineReducers(reducer), applyMiddleware(...middleware));
  sagaMiddleware.run(rootSaga);

  return {
    store,
  };
};

export default configureStore;
