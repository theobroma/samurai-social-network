import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Users as UsersComponent } from '../../@components/Users/Users';
import { getProfile } from '../../@store/profile/selectors';
import { fetchUsersAsync } from '../../@store/users/actions';
import { getUsers } from '../../@store/users/selectors';

export const Users: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers).items;
  const profile = useSelector(getProfile);

  useEffect(() => {
    dispatch(fetchUsersAsync.request(1));
  }, [dispatch]);

  return (
    <>
      Users
      <UsersComponent users={users} />
    </>
  );
});

export default Users;
