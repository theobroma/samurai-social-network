import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProfileType } from '../../../../@types';
import ContactsData from './ContactsData';

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
              <div>Name :{profile.fullName}</div>
            </div>
            <div>
              <div>About me: {profile.aboutMe || '-'}</div>
            </div>
            <div>
              <div>
                Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
              </div>
            </div>
            <div>
              <div>
                My professional skills:{' '}
                {profile.lookingForAJobDescription || '-'}
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
