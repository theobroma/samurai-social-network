import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './@store/index';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const configureStore = () => {
  const logger = createLogger({
    collapsed: true,
  });

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    thunk,
    logger,
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
