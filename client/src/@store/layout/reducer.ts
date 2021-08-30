import { createReducer } from 'typesafe-actions';
import { LayoutActionType } from './actions';
import { SET_THEME } from './constants';
import { ThemeColors } from '../../@types';

export const layoutInitialState = {
  theme: 'light' as ThemeColors,
};

export type layoutStateType = typeof layoutInitialState;

export const layoutReducer = createReducer<layoutStateType, LayoutActionType>(
  layoutInitialState,
  {
    [SET_THEME]: (state, { payload: newTheme }) => {
      return { ...state, theme: newTheme };
    },
  },
);
