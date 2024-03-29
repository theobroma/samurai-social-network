import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthAPI } from '../../@api/auth';
import type { CaptchaResponseType } from '../../@types';
import {
  CaptchaResponseSchema,
  LoginResponseSchema,
  LogoutResponseSchema,
  MeResponseSchema,
  ResultCodeForCapcthaEnum,
  ResultCodesEnum,
} from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const authInitialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
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
      if (res.data.resultCode === ResultCodesEnum.Success) {
        // success, get auth data
        thunkAPI.dispatch(authMeTC());
      } else if (
        res.data.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired
      ) {
        thunkAPI.dispatch(getCaptchaUrlTC());
      }

      // ZOD validation
      try {
        LoginResponseSchema.parse(res.data);
      } catch (error) {
        // Log & alert error <-- very important!
        console.log(error);
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
      thunkAPI.dispatch(setLoadingAC(false));
    }
  },
);

export const authMeTC = createAsyncThunk('auth/authMe', async (_, thunkAPI) => {
  try {
    // thunkAPI.dispatch(setLoadingAC(true));
    await waitForMe(500);
    const res = await AuthAPI.me();
    if (res.data.resultCode === ResultCodesEnum.Success) {
      const { id, email, login } = res.data.data;
      thunkAPI.dispatch(
        setAuthUserDataAC({
          userId: id,
          email,
          login,
          isAuth: true, // duplication  as loginTC.fulfilled
        }),
      );
    }

    // ZOD validation
    try {
      MeResponseSchema.parse(res.data);
    } catch (error) {
      // Log & alert error <-- very important!
      console.log(error);
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

export const logoutTC = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // thunkAPI.dispatch(setLoadingAC(true));
    await waitForMe(500);
    const res = await AuthAPI.logout();
    if (res.data.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(
        setAuthUserDataAC({
          userId: null,
          email: null,
          login: null,
          isAuth: false,
        }),
      );
    }

    // ZOD validation
    try {
      LogoutResponseSchema.parse(res.data);
    } catch (error) {
      // Log & alert error <-- very important!
      console.log(error);
    }

    return true; // return doesn't matter
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

export const getCaptchaUrlTC = createAsyncThunk<CaptchaResponseType, void>(
  'auth/getCaptchaUrl',
  async (_, thunkAPI) => {
    try {
      await waitForMe(500);
      const res = await AuthAPI.getCaptchaUrl();

      // ZOD validation
      try {
        CaptchaResponseSchema.parse(res.data);
      } catch (error) {
        // Log & alert error <-- very important!
        console.log(error);
      }

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
    setAuthUserDataAC(state, action) {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.isAuth = action.payload.isAuth;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state, action) => {
      state.isAuth = true;
      //  TODO tmp
      state.userId = action.payload.data.userId;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setLoadingAC, setAuthUserDataAC } = authSlice.actions;
