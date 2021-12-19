import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../@store/auth/selectors';
import {
  fetchProfileAsync,
  fetchStatusAsync,
  updateStatusAsync,
  updateAvatarAsync,
} from '../../@store/profile/actions';
import { Profile as ProfileComponent } from '../../@components/Profile';
import { getProfile, getStatus } from '../../@store/profile/selectors';

export const ProfileView = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const profile = useSelector(getProfile);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (userId) {
      dispatch(fetchProfileAsync.request(userId));
      dispatch(fetchStatusAsync.request(userId));
    }
  }, [dispatch, userId]);

  const handleUpdateStatus = (newStatus: string) => {
    dispatch(updateStatusAsync.request(newStatus));
  };
  const saveAvatar = (file: File) => {
    dispatch(updateAvatarAsync.request(file));
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
