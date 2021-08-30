import { ActionType, createAction } from 'typesafe-actions';
import { SET_THEME } from './constants';
import { ThemeColors } from '../../@types';

export const setTheme = createAction(SET_THEME)<ThemeColors>();

export const actions = {
  setTheme,
};

export type LayoutActionType = ActionType<typeof actions>;
