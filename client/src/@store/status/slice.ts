import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StatusAPI } from '../../@api/status';
import { IDType } from '../../@types';
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
      //   try {
      //     SimilarMediaAllResponseSchema.parse(res.data);
      //     // SimilarMoviesResponseSchema.parse(res.data);
      //     // SimilarTVResponseSchema.parse(res.data);
      //   } catch (error) {
      //     // Log & alert error <-- very important!
      //     console.log(error);
      //   }

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const statusSlice = createSlice({
  name: 'status',
  initialState: statusInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatusTC.pending, (state) => {
      state.isFetching = true;
      //   clear data
      state.status = '';
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
