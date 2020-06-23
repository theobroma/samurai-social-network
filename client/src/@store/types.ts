import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export interface TodoType {
  _id: string;
  text: string | undefined;
  completed: boolean;
}

export type TodoListType = {
  data: TodoType[];
  editingTodoId: string | null;
  editingTodoTitle: string | undefined;
};

export type TodoActionType = ActionType<typeof actions>;
export type FilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';
