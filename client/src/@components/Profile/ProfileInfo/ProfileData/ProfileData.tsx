import React from 'react';
import shortid from 'shortid';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import s from '../../ProfileInfo.module.css';
import { ProfileType, ContactsType } from '../../../../@types';
import ContactsData from './ContactsData';

type ProfileDataProps = {
  profile: ProfileType;
};

const ProfileData: React.FC<ProfileDataProps> = ({ profile }) => (
  <div className={s.descriptionBlock}>
    <ContactsData contacts={profile.contacts} />
    <div>
      <div>
        <div>Name :{profile.fullName}</div>
      </div>
      <div>
        <div>About me: {profile.aboutMe || '-'}</div>
      </div>
      <div>
        <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
      </div>
      <div>
        <div>
          My professional skills: {profile.lookingForAJobDescription || '-'}
        </div>
      </div>
    </div>
  </div>
);
export default ProfileData;
