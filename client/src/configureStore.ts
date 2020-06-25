import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './@store/index';
import { rootSaga } from './rootSaga';

const configureStore = () => {
  const logger = createLogger({
    collapsed: true,
  });

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [thunk, logger, sagaMiddleware];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
