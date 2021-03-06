import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Users as UsersComponent } from '../../@components/Users/Users';
import {
  // setCurrentPage,
  // setUsersFilter,
  // fetchUsersAsync,
  followUserAsync,
  unfollowUserAsync,
} from '../../@store/users/actions';
import { getUsers } from '../../@store/users/selectors';
import {
  fetchUsersTC,
  setCurrentPage,
  setUsersFilter,
} from '../../@store/users/slice';
import { UsersFilterType } from '../../@types';

export const Users: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const {
    items,
    pageSize,
    totalCount,
    currentPage,
    filter,
    followingInProgress,
  } = useSelector(getUsers);

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
    dispatch(followUserAsync.request(id));
  };

  const handleUnFollow = (id: number) => {
    dispatch(unfollowUserAsync.request(id));
  };

  return (
    <>
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
    </>
  );
});

export default Users;
