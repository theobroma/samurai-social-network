import { createSlice } from '@reduxjs/toolkit';
import { ROLE } from '../../@types';

const authInitialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
  userRole: ROLE.GUEST,
};

export type AuthInitialStateType = typeof authInitialState;

export const slice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    // setTheme(state, action) {
    //   state.theme = action.payload;
    // },
  },
});

export const authReducer = slice.reducer;
// export const { setTheme } = slice.actions;
