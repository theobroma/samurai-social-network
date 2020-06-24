import { combineReducers } from 'redux';
import { filterReducer } from './filter-reducer';
import { todosReducer } from './todos-reducer';
import { authReducer } from './auth/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
