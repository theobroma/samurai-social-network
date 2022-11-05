import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { UsersAPI } from '../../@api/users';
import type {
  IDType,
  LoadingStateType,
  StandardResponseType,
  UsersFilterType,
  UsersResponseType,
  UserType,
} from '../../@types';
import { UsersResponseSchema } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

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

export type UsersInitialStateType = typeof usersInitialState;

export const fetchUsersTC = createAsyncThunk<
  UsersResponseType,
  void,
  { state: any }
>('users/fetchUsers', async (_, thunkAPI) => {
  const { currentPage, pageSize, filter } = thunkAPI.getState().users;
  try {
    await waitForMe(1000);
    const res = await UsersAPI.getUsers(currentPage, pageSize, filter);

    // ZOD validation
    try {
      UsersResponseSchema.parse(res.data);
    } catch (error) {
      // Log & alert error <-- very important!
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const followUserTC = createAsyncThunk<
  StandardResponseType,
  IDType,
  { state: any }
>('users/followUser', async (id, thunkAPI) => {
  try {
    const res = await UsersAPI.followUser(id);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const unfollowUserTC = createAsyncThunk<
  StandardResponseType,
  IDType,
  { state: any }
>('users/unfollowUser', async (id, thunkAPI) => {
  try {
    const res = await UsersAPI.unfollowUser(id);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const usersSlice = createSlice({
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

export const usersReducer = usersSlice.reducer;
export const { setCurrentPage, setUsersFilter } = usersSlice.actions;
