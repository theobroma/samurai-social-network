import React from 'react';
import s from '../../ProfileInfo.module.css';
import { ProfileType, ContactsType } from '../../../../@types';

type ContactType = {
  title: string;
  value: string;
};
const Contact: React.FC<ContactType> = ({
  title,
  value = 'https://www.facebook.com/',
}) => (
  <li>
    <a href={value} target="_blank">
      {title}
    </a>
  </li>
);

type ProfileDataProps = {
  profile: ProfileType;
};

const ProfileData: React.FC<ProfileDataProps> = ({ profile }) => (
  <div className={s.descriptionBlock}>
    <ul>
      {Object.keys(profile.contacts).map((c) => (
        <Contact
          title={c}
          value={profile.contacts[c as keyof ContactsType]}
          key={c}
        />
      ))}
    </ul>
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
