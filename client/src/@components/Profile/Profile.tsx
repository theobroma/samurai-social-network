import React, { useState } from 'react';
import { Col, Card, Row, Button } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import ProfileData from './ProfileInfo/ProfileData/ProfileData';
import { ProfileType } from '../../@types';
import ProfileStatus from './ProfileInfo/ProfileStatus';
import ProfileDataForm from './ProfileInfo/ProfileDataForm';

type Props = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export const Profile: React.FC<Props> = ({ profile, status, updateStatus }) => {
  const [edit, setEdit] = useState(false);
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
        <hr />
        <Row>
          <Col md={10}>
            {!edit ? <ProfileData profile={profile} /> : <ProfileDataForm />}
          </Col>
          <Col md={2}>
            {!edit && (
              <Button variant="outline-primary" onClick={() => setEdit(true)}>
                <BsPencilSquare />
              </Button>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Profile;
