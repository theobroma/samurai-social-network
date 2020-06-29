import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../@store/auth/selectors';
import { actions } from '../../@store/profile/actions';
import { Profile as ProfileComponent } from '../../@components/Profile';
import { getProfile } from '../../@store/profile/selectors';
import { fetchUsersAsync } from '../../@store/users/actions';

export const Users: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  // const userId = useSelector(getUserId);
  const profile = useSelector(getProfile);

  useEffect(() => {
    dispatch(fetchUsersAsync.request(1));
  }, [dispatch]);

  return (
    <>
      <ProfileComponent profile={profile} />
    </>
  );
});

export default Users;
