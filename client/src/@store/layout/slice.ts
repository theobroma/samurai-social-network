import { createSlice } from '@reduxjs/toolkit';

import type { ThemeColors } from '../../@types';

const layoutInitialState = {
  theme: 'light' as ThemeColors,
};

export type LayoutInitialStateType = typeof layoutInitialState;

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: layoutInitialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const layoutReducer = layoutSlice.reducer;
export const { setTheme } = layoutSlice.actions;
