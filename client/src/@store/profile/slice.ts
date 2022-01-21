import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProfileAPI } from '../../@api/profile';
import { ProfileResponseType } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

export const profileInitialState = {
  profile: {} as ProfileResponseType,
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  //   status
  status: '',
};
export type ProfileInitialStateType = typeof profileInitialState;

export const getProfileTC = createAsyncThunk<any, any, any>(
  'profile/getProfile',
  async (param, thunkAPI) => {
    try {
      await waitForMe(500);
      const res = await ProfileAPI.getProfile(param.userId);

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

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileTC.pending, (state) => {
      state.isFetching = true;
      //   clear data
      state.profile = {} as ProfileResponseType;
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
    // builder.addCase(getSimilarMediaTC.rejected, (state, action) => {
    //   state.isFetching = false;
    //   state.isError = true;
    //   if (action.payload instanceof Error) {
    //     state.errorMessage = action.payload.message;
    //   }
    // });
  },
});

export const profileReducer = profileSlice.reducer;
// export const { setTheme } = profileSlice.actions;
