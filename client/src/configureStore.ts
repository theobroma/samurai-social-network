import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './@store/index';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['router'], // will not be persisted
  // Persist just 'auth' reducer data
  whitelist: ['auth', 'layout'],
};

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

// https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
const middleware = [
  ...getDefaultMiddleware({
    // immutableCheck: true,
    thunk: true,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  sagaMiddleware,
  routerMiddleware(history),
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default { store, persistor };
