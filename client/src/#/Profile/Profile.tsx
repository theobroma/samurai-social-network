import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getProfile } from '../../@store/profile/actions';
import { getUserId } from '../../@store/auth/selectors';
// import classes from './Music.module.scss';

export const Profile: React.FC = React.memo(() => {
  const userId = useSelector(getUserId);
  useEffect(() => {
    console.log('Profile component');
    // getProfile(userId);
  }, [userId]);

  return <div>Profile</div>;
});

export default Profile;
