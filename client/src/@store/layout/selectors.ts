import { RootState } from '../configureStore';

export const getTheme = (state: RootState) => {
  return state.layout.theme;
};
