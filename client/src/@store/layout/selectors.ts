import { RootState } from '../index';
import { ThemeColors } from '../../@types';

export const getTheme = (state: RootState): ThemeColors => {
  return state.layout.theme;
};
