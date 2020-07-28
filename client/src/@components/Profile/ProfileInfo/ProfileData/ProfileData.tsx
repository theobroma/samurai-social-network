import React, { ChangeEvent } from 'react';
import { Row, Col } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { ProfileType } from '../../../../@types';
import ContactsData from './ContactsData';
import { StyledName, StyledLabel, StyledValue } from './Styled';

type ProfileDataProps = {
  profile: ProfileType;
  saveAvatar: (file: File) => void;
};

const ProfileData: React.FC<ProfileDataProps> = ({ profile, saveAvatar }) => {
  const onAvatarSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) saveAvatar(e.target.files[0]);
  };

  return (
    <>
      <Row>
        <Col>
          <div>
            <div>
              <div>
                <Avatar
                  name="Wim Mostmans"
                  size="150"
                  round
                  src={
                    profile.photos.large ||
                    'https://data.whicdn.com/images/331901362/original.jpg'
                  }
                />

                {/* <Avatar
                  name="Wim Mostmans"
                  size="150"
                  round
                  src={
                    profile.photos.small ||
                    'https://data.whicdn.com/images/331901362/original.jpg'
                  }
                /> */}
                <div className="my-3">
                  <input type="file" onChange={onAvatarSelected} />
                </div>
                <div />
              </div>
              <div>
                <div>
                  <StyledName>{profile.fullName}</StyledName>
                </div>
                <div>
                  <StyledLabel>About me: </StyledLabel>
                  <StyledValue>{profile.aboutMe || '-'}</StyledValue>
                </div>
              </div>
              <div>
                <div>
                  <StyledLabel>Looking for a job: </StyledLabel>
                  <StyledValue>
                    {profile.lookingForAJob ? 'yes' : 'no'}
                  </StyledValue>
                </div>
              </div>
              <div>
                <div>
                  <StyledLabel> My professional skills: </StyledLabel>
                  <StyledValue>
                    {profile.lookingForAJobDescription || '-'}
                  </StyledValue>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <ContactsData contacts={profile.contacts} />
        </Col>
      </Row>
    </>
  );
};
export default ProfileData;
