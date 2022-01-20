import { configureStore } from '@reduxjs/toolkit';
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
import { rootReducer } from './index';
import { rootSaga } from '../rootSaga';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['router'], // will not be persisted
  whitelist: ['auth', 'layout'], // persist just this
};

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer());

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, sagaMiddleware),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default { store, persistor };