import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './@utils/localStorage';
import { rootReducer, RootState } from './@store/index';
import { todosInitialState } from './@store/todos-reducer';
import { filterInitialState } from './@store/filter-reducer';

const configureStore = () => {
  const persistedState = loadState();

  let totalInitialState: RootState = {
    filter: filterInitialState,
    todos: todosInitialState,
  };
  // if persistedState is not empty then assign parsed persistedState to initState
  if (persistedState) {
    totalInitialState = persistedState;
  }

  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    totalInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.subscribe(
    throttle(() => {
      console.log('saved to localStorage');
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
