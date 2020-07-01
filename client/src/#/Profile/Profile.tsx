import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../@store/auth/selectors';
import { actions } from '../../@store/profile/actions';
import { Profile as ProfileComponent } from '../../@components/Profile';
import { getProfile, getStatus } from '../../@store/profile/selectors';

export const Profile: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const profile = useSelector(getProfile);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(actions.fetchProfileAsync.request(userId));
  }, [dispatch, userId]);

  return (
    <>
      <ProfileComponent profile={profile} status={status} />
    </>
  );
});

export default Profile;
