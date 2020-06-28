import React from 'react';
import ProfileData from './ProfileInfo/ProfileData/ProfileData';
import { ProfileType } from '../../@types';

type Props = {
  profile: ProfileType;
};

export const Profile: React.FC<Props> = ({ profile }) => {
  return (
    <div>
      Profile
      <ProfileData profile={profile} />
    </div>
  );
};
export default Profile;
