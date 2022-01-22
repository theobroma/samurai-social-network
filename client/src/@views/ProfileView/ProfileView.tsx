import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Profile as ProfileComponent } from '../../@components/Profile';
import { getUserId } from '../../@store/auth/selectors';
import { getProfile } from '../../@store/profile/selectors';
import { getProfileTC, updateAvatarTC } from '../../@store/profile/slice';
import { getStatus } from '../../@store/status/selectors';
import { getStatusTC, updateStatusTC } from '../../@store/status/slice';

export const ProfileView = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const profile = useSelector(getProfile);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (userId) {
      dispatch(getProfileTC({ userId }));
      dispatch(getStatusTC({ userId }));
    }
  }, [dispatch, userId]);

  const handleUpdateStatus = (newStatus: string) => {
    dispatch(updateStatusTC({ status: newStatus }));
  };
  const saveAvatar = (file: File) => {
    dispatch(updateAvatarTC(file));
  };

  return (
    <ProfileComponent
      profile={profile}
      status={status}
      updateStatus={handleUpdateStatus}
      saveAvatar={saveAvatar}
    />
  );
};

export default ProfileView;
