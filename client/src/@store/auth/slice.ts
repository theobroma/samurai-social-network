import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthAPI } from '../../@api/auth';
import { ROLE } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const authInitialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
  userRole: ROLE.GUEST,
  isLoading: false,
};

export type AuthInitialStateType = typeof authInitialState;

export const loginTC = createAsyncThunk(
  'auth/login',
  async (
    param: {
      email: string;
      password: string;
      rememberMe?: boolean;
      captcha?: string | null;
    },
    thunkAPI,
  ) => {
    try {
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res = await AuthAPI.login(param.email, param.password);
      return { data: res.data };
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    } finally {
      thunkAPI.dispatch(setLoadingAC(false));
    }
  },
);

export const slice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const authReducer = slice.reducer;
export const { setLoadingAC } = slice.actions;
