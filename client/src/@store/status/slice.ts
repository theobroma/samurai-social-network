import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StatusAPI } from '../../@api/status';
import {
  IDType,
  StandardResponseSchema,
  StatusResponseSchema,
} from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const statusInitialState = {
  status: '',
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export type StatusInitialStateType = typeof statusInitialState;

export const getStatusTC = createAsyncThunk<string, { userId: IDType }, any>(
  'status/getStatus',
  async (param, thunkAPI) => {
    try {
      await waitForMe(500);
      const res = await StatusAPI.getStatus(param.userId);
      // ZOD validation
      try {
        StatusResponseSchema.parse(res.data);
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

export const updateStatusTC = createAsyncThunk<
  any,
  { status: string },
  { state: any }
>('status/updateStatus', async (param, thunkAPI) => {
  try {
    await waitForMe(500);
    const res = await StatusAPI.updateStatus(param.status);
    // refetch status
    if (res.status === 200) {
      const state = thunkAPI.getState();
      const { userId } = state.auth;
      thunkAPI.dispatch(getStatusTC({ userId }));
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

export const statusSlice = createSlice({
  name: 'status',
  initialState: statusInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatusTC.pending, (state) => {
      state.isFetching = true;
      //   clear data
      // state.status = '';
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(getStatusTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = action.payload;
      }
      state.isFetching = false;
      state.isSuccess = true;
    });
    builder.addCase(getStatusTC.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      if (action.payload instanceof Error) {
        state.errorMessage = action.payload.message;
      }
    });
  },
});

export const statusReducer = statusSlice.reducer;
// export const { setTheme } = statusSlice.actions;
