import React, { useEffect } from 'react';
import { Profile as ProfileComponent } from '../../@components/Profile';
import { userIdSelector } from '../../@store/auth/selectors';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { profileSelector } from '../../@store/profile/selectors';
import { getProfileTC, updateAvatarTC } from '../../@store/profile/slice';
import { statusSelector } from '../../@store/status/selectors';
import { getStatusTC, updateStatusTC } from '../../@store/status/slice';

export const ProfileView = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(userIdSelector);
  const profile = useAppSelector(profileSelector);
  const status = useAppSelector(statusSelector);

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
