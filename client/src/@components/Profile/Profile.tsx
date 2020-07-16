import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import ProfileData from './ProfileInfo/ProfileData/ProfileData';
import { ProfileType } from '../../@types';
import ProfileStatus from './ProfileInfo/ProfileStatus/ProfileStatus';

type Props = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export const Profile: React.FC<Props> = ({ profile, status, updateStatus }) => {
  const BlockTitle = (
    <div className="row mt-4 mb-3">
      <div className="col-12">
        <div className="option-subheading">Account Information</div>
      </div>
    </div>
  );
  return (
    <Card>
      <Card.Body>
        {BlockTitle}
        <Row>
          <Col>
            <ProfileStatus status={status} updateStatus={updateStatus} />
          </Col>
        </Row>
        <ProfileData profile={profile} />
      </Card.Body>
    </Card>
  );
};
export default Profile;
