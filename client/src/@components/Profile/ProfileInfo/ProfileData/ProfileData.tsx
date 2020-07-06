import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { ProfileType } from '../../../../@types';
import ContactsData from './ContactsData';
import { StyledName, StyledLabel, StyledValue } from './Styled';

type ProfileDataProps = {
  profile: ProfileType;
};

const ProfileData: React.FC<ProfileDataProps> = ({ profile }) => (
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
                  'https://cdn2.hubspot.net/hubfs/2221797/cumulus2.jpg'
                }
              />

              <Avatar
                name="Wim Mostmans"
                size="150"
                round
                src={
                  profile.photos.small ||
                  'https://data.whicdn.com/images/331901362/original.jpg'
                }
              />
              <div>
                <StyledName>{profile.fullName}</StyledName>
              </div>
            </div>
            <div>
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
export default ProfileData;
