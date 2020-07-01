import React from 'react';
import ProfileData from './ProfileInfo/ProfileData/ProfileData';
import { ProfileType } from '../../@types';
import ProfileStatus from './ProfileInfo/ProfileStatus/ProfileStatus';

type Props = {
  profile: ProfileType;
  status: string;
};

export const Profile: React.FC<Props> = ({ profile, status }) => {
  return (
    <div>
      Profile
      <ProfileStatus
        status={status}
        // updateStatus={updateStatus}
      />
      <ProfileData profile={profile} />
    </div>
  );
};
export default Profile;
