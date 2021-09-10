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

export const logoutTC = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // thunkAPI.dispatch(setLoadingAC(true));
    await waitForMe(500);
    const res = await AuthAPI.logout();
    if (res.data.resultCode === 0) {
      thunkAPI.dispatch(
        setAuthUserDataAC({
          id: null,
          email: null,
          login: null,
          isAuth: false,
          // additional custom
          userRole: ROLE.GUEST,
        }),
      );
    }
    return res.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    // Use `err.response.data` as `action.payload` for a `rejected` action,
    // by explicitly returning it using the `rejectWithValue()` utility
    return thunkAPI.rejectWithValue(err.response.data);
  } finally {
    // thunkAPI.dispatch(setLoadingAC(false));
  }
});

export const slice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
    setAuthUserDataAC(state, action) {
      state.userId = action.payload.id;
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.isAuth = action.payload.isAuth;
      // additional custom
      state.userRole = action.payload.userRole;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state, action) => {
      state.isAuth = true;
      //  TODO tmp
      state.userId = action.payload.data.userId;
      state.userRole = ROLE.USER;
    });
  },
});

export const authReducer = slice.reducer;
export const { setLoadingAC, setAuthUserDataAC } = slice.actions;
