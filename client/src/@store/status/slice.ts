import { createSlice } from '@reduxjs/toolkit';
import { ThemeColors } from '../../@types';

const statusInitialState = {
  status: 'no status',
};

export type StatusInitialStateType = typeof statusInitialState;

export const statusSlice = createSlice({
  name: 'status',
  initialState: statusInitialState,
  reducers: {},
});

export const statusReducer = statusSlice.reducer;
// export const { setTheme } = statusSlice.actions;
