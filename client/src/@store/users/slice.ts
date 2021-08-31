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

export const fetchUsersTC = createAsyncThunk<any, void, { state: any }>(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    const { currentPage, pageSize, filter, currentRequestId, loading } =
      thunkAPI.getState().users;
    try {
      // TODO:
      // if (loading !== 'pending' || thunkAPI.requestId !== currentRequestId) {
      //   return null;
      // }
      const res = await UsersAPI.getUsers(currentPage, pageSize, filter);
      return res;
    } catch (err: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const followUserTC = createAsyncThunk<any, number, { state: any }>(
  'users/followUser',
  async (id, thunkAPI) => {
    try {
      const res = await UsersAPI.followUser(id);
      return res;
    } catch (err: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const slice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setUsersFilter(state, action) {
      state.filter = action.payload;
    },
  },

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
export const { setCurrentPage, setUsersFilter } = slice.actions;
