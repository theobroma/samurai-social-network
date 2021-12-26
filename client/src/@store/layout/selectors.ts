import { RootState } from '../index';

export const getTheme = (state: RootState) => {
  return state.layout.theme;
};
