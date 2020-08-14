import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './@store/index';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['router'], // will not be persisted
    // Persist just 'auth' reducer data
    whitelist: ['auth', 'layout'],
  };

  const pReducer = persistReducer(persistConfig, rootReducer(history));

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
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureStore();

export const persistor = persistStore(store);

export default { store, persistor };
