import { RootState } from './index';

export const todosSelector = (state: RootState) => {
  return state.todos;
};
export const filterSelector = (state: RootState) => {
  return state.filter;
};
