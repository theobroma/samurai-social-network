import { combineReducers } from 'redux';
import { filterReducer } from './filter-reducer';
import { todosReducer } from './todos-reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
