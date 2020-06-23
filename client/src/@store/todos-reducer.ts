import { createReducer } from 'typesafe-actions';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  REMOVE_COMPLETED_TODOS,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  CHANGE_EDITING_TODO_TITLE,
  SAVING_EDITING_TODO_TITLE,
} from './constants';

import { TodoListType, TodoActionType } from './types';

export const todosInitialState: TodoListType = {
  data: [],
  editingTodoId: null,
  editingTodoTitle: '',
};

export const todosReducer = createReducer<TodoListType, TodoActionType>(
  todosInitialState,
  {
    [ADD_TODO]: (state, { payload: text }) => {
      return {
        ...state,
        data: [
          {
            _id: uuidv4(),
            text,
            completed: false,
          },
          ...state.data,
        ],
      };
    },
    [TOGGLE_TODO]: (state, { payload: id }) => {
      const data = state.data.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      return { ...state, data };
    },
    [REMOVE_TODO]: (state, { payload: id }) => {
      return {
        ...state,
        data: state.data.filter((todo) => todo._id !== id),
      };
    },
    [TOGGLE_ALL_TODO]: (state, { payload: bool }) => {
      const data = state.data.map((todo) => {
        return { ...todo, completed: bool };
      });
      return { ...state, data };
    },
    [REMOVE_COMPLETED_TODOS]: (state) => {
      return {
        ...state,
        data: state.data.filter((todo) => !todo.completed),
      };
    },
    [EDIT_TODO]: (state, { payload: id }) => {
      const title = state.data.find((t) => t._id === id)?.text;
      return {
        ...state,
        editingTodoId: id,
        editingTodoTitle: title,
      };
    },
    [CANCEL_EDIT_TODO]: (state) => {
      return {
        ...state,
        editingTodoId: null,
      };
    },
    [CHANGE_EDITING_TODO_TITLE]: (state, { payload: title }) => {
      return {
        ...state,
        editingTodoTitle: title,
      };
    },
    [SAVING_EDITING_TODO_TITLE]: (state) => {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo._id === state.editingTodoId
            ? // transform the one with a matching id
              { ...todo, text: state.editingTodoTitle }
            : // otherwise return original todo
              todo,
        ),
        editingTodoId: null,
        editingTodoTitle: '',
      };
    },
  },
);

export default todosReducer;
