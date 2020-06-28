import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../@store/auth/selectors';
import { actions } from '../../@store/profile/actions';

export const Profile: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  useEffect(() => {
    dispatch(actions.fetchProfileAsync.request(userId));
  }, [dispatch, userId]);

  return <div>Profile</div>;
});

export default Profile;
