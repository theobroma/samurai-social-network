import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import ProfileData from './ProfileInfo/ProfileData/ProfileData';
import { ProfileType } from '../../@types';
import ProfileStatus from './ProfileInfo/ProfileStatus/ProfileStatus';

type Props = {
  profile: ProfileType;
  status: string;
};

export const Profile: React.FC<Props> = ({ profile, status }) => {
  const BlockTitle = (
    <div className="row mt-4 mb-3">
      <div className="col-12">
        <h4>PROFILE</h4>
      </div>
    </div>
  );
  return (
    <Card>
      <Card.Body>
        {BlockTitle}
        <Row>
          <Col>
            <ProfileStatus
              status={status}
              // updateStatus={updateStatus}
            />
          </Col>
        </Row>
        <ProfileData profile={profile} />
      </Card.Body>
    </Card>
  );
};
export default Profile;
