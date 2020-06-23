// action type constants
export const ADD_TODO = '@@todos/ADD_TODO' as const;
export const REMOVE_TODO = '@@todos/REMOVE_TODO' as const;
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO' as const;
export const TOGGLE_ALL_TODO = '@@todos/TOGGLE_ALL_TODO' as const;
export const REMOVE_COMPLETED_TODOS = '@@todos/REMOVE_COMPLETED_TODOS' as const;
export const EDIT_TODO = '@@todos/EDIT_TODO' as const;
export const CANCEL_EDIT_TODO = '@@todos/CANCEL_EDIT_TODO' as const;
export const CHANGE_EDITING_TODO_TITLE = '@@todos/CHANGE_EDITING_TODO_TITLE' as const;
export const SAVING_EDITING_TODO_TITLE = '@@todos/SAVING_EDITING_TODO_TITLE' as const;

export const SET_FILTER = '@@filter/SET_FILTER' as const;
