import { createSlice } from '@reduxjs/toolkit';
import { ThemeColors } from '../../@types';

const layoutInitialState = {
  theme: 'light' as ThemeColors,
};

export type LayoutInitialStateType = typeof layoutInitialState;

export const slice = createSlice({
  name: 'layout',
  initialState: layoutInitialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const layoutReducer = slice.reducer;
export const { setTheme } = slice.actions;
