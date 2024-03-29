import React, { useEffect } from 'react';

import { Users as UsersComponent } from '../../@components/Users/Users';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { usersSelector } from '../../@store/users/selectors';
import {
  fetchUsersTC,
  followUserTC,
  setCurrentPage,
  setUsersFilter,
  unfollowUserTC,
} from '../../@store/users/slice';
import type { UsersFilterType } from '../../@types';

export const UsersView = () => {
  const dispatch = useAppDispatch();
  const {
    items,
    pageSize,
    totalCount,
    currentPage,
    filter,
    followingInProgress,
  } = useAppSelector(usersSelector);

  useEffect(() => {
    // dispatch(fetchUsersAsync.request({ currentPage, pageSize: 10 }));
    // dispatch(fetchUsersTC({ currentPage, pageSize: 10, filter }));
    dispatch(fetchUsersTC());
  }, [dispatch, currentPage]);

  const handlePageClick = (state: { selected: number }) => {
    dispatch(setCurrentPage(state.selected + 1)); // +1 fix diff start position
  };

  const handleSetUsersFilter = (userFilter: UsersFilterType) => {
    dispatch(setUsersFilter(userFilter));
    // refetch users
    // dispatch(fetchUsersAsync.request({ currentPage, pageSize: 10 }));
    // dispatch(fetchUsersTC({ currentPage, pageSize: 10, filter }));
    dispatch(fetchUsersTC());
    dispatch(setCurrentPage(1));
  };

  const handleFollow = (id: number) => {
    // dispatch(followUserAsync.request(id));
    dispatch(followUserTC(id));
  };

  const handleUnFollow = (id: number) => {
    // dispatch(unfollowUserAsync.request(id));
    dispatch(unfollowUserTC(id));
  };

  return (
    <UsersComponent
      users={items}
      pageSize={pageSize}
      totalCount={totalCount}
      currentPage={currentPage}
      handlePageClick={handlePageClick}
      handleSetUsersFilter={handleSetUsersFilter}
      follow={handleFollow}
      unfollow={handleUnFollow}
      followingInProgress={followingInProgress}
    />
  );
};

export default UsersView;
