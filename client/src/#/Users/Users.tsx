import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Users as UsersComponent } from '../../@components/Users/Users';
import {
  fetchUsersAsync,
  setCurrentPage,
  followUserAsync,
  unfollowUserAsync,
} from '../../@store/users/actions';
import { getUsers } from '../../@store/users/selectors';

export const Users: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const {
    items,
    pageSize,
    totalCount,
    currentPage,
    followingInProgress,
  } = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync.request(currentPage));
  }, [dispatch, currentPage]);

  const handlePageClick = (state: any) => {
    dispatch(setCurrentPage(state.selected + 1)); // +1 fix diff start position
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
        follow={handleFollow}
        unfollow={handleUnFollow}
        followingInProgress={followingInProgress}
      />
    </>
  );
});

export default Users;
