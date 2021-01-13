import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import { UsersAPI } from '../../@api/users';
import { LoadingStateType, UserType, UsersFilterType } from '../../@types';

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
  currentRequestId: undefined as any,
  error: null as SerializedError | null,
  // following
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
      return res;
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
  extraReducers: (builder) => {
    builder.addCase(fetchUsersTC.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(fetchUsersTC.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const { items, totalCount } = action.payload;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.items = items;
        state.totalCount = totalCount;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(fetchUsersTC.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const usersReducer = slice.reducer;
