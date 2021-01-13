import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersAPI } from '../../@api/users';
import { LoadingStateType, UserType, UsersFilterType } from '../../@types';
// import { fetchUsersAsync } from './actions';

const usersInitialState = {
  items: [] as Array<UserType>,
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  filter: {
    term: '',
    friend: null,
  } as UsersFilterType,
  //   isFetching: false,
  loading: 'idle' as LoadingStateType,
  followingInProgress: [] as Array<number>,
};

export const fetchUsersTC = createAsyncThunk(
  'users/fetchUsers',
  async (
    param,
    // param: { currentPage: number; pageSize: number; filter: UsersFilterType },
    thunkAPI,
  ) => {
    try {
      const res = await UsersAPI.getUsers(1, 10, {
        term: '',
        friend: null,
      });
      return { items: res.data };
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const slice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(getForecastTC.fulfilled, (state, action) => {
  //       if (action.payload) {
  //         state.forecastday = action.payload.forecastday;
  //       }
  //     });
  //   },

  extraReducers: (builder) => {
    builder.addCase(fetchUsersTC.pending, (state, action) => {
      state.loading = 'pending';
    });
  },
  //   extraReducers: {
  //     [fetchUsersTC.pending]: (state, action) => {
  //       state.loading = 'pending';
  //     },
  //     // [fetchUsersTC.fulfilled]: (state, action) => {
  //     //   const { requestId } = action.meta;
  //     //   if (state.loading === 'pending' && state.currentRequestId === requestId) {
  //     //     state.loading = 'idle';
  //     //     state.entities.push(action.payload);
  //     //     state.currentRequestId = undefined;
  //     //   }
  //     // },
  //     // [fetchUsersTC.rejected]: (state, action) => {
  //     //   const { requestId } = action.meta;
  //     //   if (state.loading === 'pending' && state.currentRequestId === requestId) {
  //     //     state.loading = 'idle';
  //     //     state.error = action.error;
  //     //     state.currentRequestId = undefined;
  //     //   }
  //     // },
  //   },
});

export const usersReducer = slice.reducer;
