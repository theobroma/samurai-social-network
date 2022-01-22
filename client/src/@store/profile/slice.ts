import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDType } from '../../@types/General';
import { ProfileAPI } from '../../@api/profile';
import {
  ProfileResponseSchema,
  ProfileResponseType,
  ProfileType,
  StandardResponseSchema,
  StandardResponseType,
} from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

export const profileInitialState = {
  profile: {} as ProfileType,
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};
export type ProfileInitialStateType = typeof profileInitialState;

export const getProfileTC = createAsyncThunk<
  ProfileResponseType,
  { userId: IDType },
  { state: any }
>('profile/getProfile', async (param, thunkAPI) => {
  try {
    await waitForMe(500);
    const res = await ProfileAPI.getProfile(param.userId);

    // ZOD validation
    try {
      ProfileResponseSchema.parse(res.data);
    } catch (error) {
      // Log & alert error <-- very important!
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const updateProfileTC = createAsyncThunk<
  StandardResponseType,
  ProfileType,
  { state: any }
>('status/updateStatus', async (param, thunkAPI) => {
  try {
    await waitForMe(500);
    const res = await ProfileAPI.updateProfile(param);
    // refetch profile
    if (res.status === 200) {
      const state = thunkAPI.getState();
      const { userId } = state.auth;
      thunkAPI.dispatch(getProfileTC({ userId }));
    }
    // ZOD validation
    try {
      StandardResponseSchema.parse(res.data);
    } catch (error) {
      // Log & alert error <-- very important!
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const updateAvatarTC = createAsyncThunk<any, any, { state: any }>(
  'profile/updateAvatar',
  async (file, thunkAPI) => {
    try {
      await waitForMe(500);
      const res = await ProfileAPI.saveAvatar(file);
      // refetch profile
      if (res.status === 200) {
        const state = thunkAPI.getState();
        const { userId } = state.auth;
        thunkAPI.dispatch(getProfileTC({ userId }));
      }
      // ZOD validation
      // try {
      //   StandardResponseSchema.parse(res.data);
      // } catch (error) {
      //   // Log & alert error <-- very important!
      //   console.log(error);
      // }

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileTC.pending, (state) => {
      state.isFetching = true;
      //   clear data
      state.profile = {} as ProfileType;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(getProfileTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.profile = action.payload;
        // simulate empty results
        // state.data.results = [];
      }
      state.isFetching = false;
      state.isSuccess = true;
    });
    builder.addCase(getProfileTC.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      if (action.payload instanceof Error) {
        state.errorMessage = action.payload.message;
      }
    });
  },
});

export const profileReducer = profileSlice.reducer;
// export const { setTheme } = profileSlice.actions;
