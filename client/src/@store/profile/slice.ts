import { createSlice } from '@reduxjs/toolkit';
import { ThemeColors } from '../../@types';

const profileInitialState = {
  theme: 'light' as ThemeColors,
};

export type ProfileInitialStateType = typeof profileInitialState;

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
});

export const profileReducer = profileSlice.reducer;
// export const { setTheme } = profileSlice.actions;
