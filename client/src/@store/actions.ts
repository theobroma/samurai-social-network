import { createAction } from 'typesafe-actions';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  REMOVE_COMPLETED_TODOS,
  SET_FILTER,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  CHANGE_EDITING_TODO_TITLE,
  SAVING_EDITING_TODO_TITLE,
} from './constants';

// create action functions
export const addTodo = createAction(ADD_TODO)<string>();
export const handleTodoToggle = createAction(TOGGLE_TODO)<string>();
export const handleTodoRemove = createAction(REMOVE_TODO)<string>();
export const handleTodoToggleAll = createAction(TOGGLE_ALL_TODO)<boolean>();
export const removeCompleted = createAction(REMOVE_COMPLETED_TODOS)();
export const editTodo = createAction(EDIT_TODO)<string>();
export const cancelEditingTodo = createAction(CANCEL_EDIT_TODO)();
export const changeEditingTodoTitle = createAction(CHANGE_EDITING_TODO_TITLE)<
  string
>();
export const saveEditingTodoTitle = createAction(SAVING_EDITING_TODO_TITLE)();
export const actions = {
  addTodo,
  handleTodoToggle,
  handleTodoRemove,
  handleTodoToggleAll,
  removeCompleted,
  editTodo,
  cancelEditingTodo,
  changeEditingTodoTitle,
  saveEditingTodoTitle,
};

export const setFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    payload: filter,
  } as const;
};

export type FilterAction = ReturnType<typeof setFilter>;
