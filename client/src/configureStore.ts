import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './@utils/localStorage';
import { rootReducer, RootState } from './@store/index';
import { rootSaga } from './rootSaga';
import { authInitialState } from './@store/auth/reducer';
import { profileInitialState } from './@store/profile/reducer';
import { usersInitialState } from './@store/users/reducer';

export const history = createBrowserHistory();

const configureStore = () => {
  const persistedState = loadState();

  let totalInitialState: RootState = {
    auth: authInitialState,
    profile: profileInitialState,
    users: usersInitialState,
    router: {
      location: {
        state: '',
        pathname: '/profile',
        search: '',
        hash: '',
        // key: 'uobrvf',
        // query: {},
      },
      action: 'POP',
    },
  };

  // if persistedState is not empty then assign parsed persistedState to initState
  if (persistedState) {
    totalInitialState = persistedState;
  }

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
    totalInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  store.subscribe(
    throttle(() => {
      console.log('saved to localStorage');
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
