import React, { useState } from 'react';
import { Col, Card, Row, Button } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import ProfileData from './ProfileInfo/ProfileData/ProfileData';
import ProfileStatus from './ProfileInfo/ProfileStatus';
import ProfileDataForm from './ProfileInfo/ProfileDataForm';
import ContactsData from './ProfileInfo/ProfileData/ContactsData';
import { updateProfileAsync } from '../../@store/profile/actions';
import { ProfileType } from '../../@types';

type Props = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  saveAvatar: (file: File) => void;
};

export const Profile: React.FC<Props> = ({
  profile,
  status,
  updateStatus,
  saveAvatar,
}) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const submitCallback = (payload: any) => {
    dispatch(updateProfileAsync.request(payload));
    setEdit(false);
  };

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
        {!edit ? (
          <>
            <Row>
              <Col md={10}>
                <ProfileData profile={profile} saveAvatar={saveAvatar} />
              </Col>
              <Col md={2}>
                <Button variant="outline-primary" onClick={() => setEdit(true)}>
                  <BsPencilSquare />
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <ContactsData contacts={profile.contacts} />
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col xs={12}>
              <ProfileDataForm
                profile={profile}
                submitCallback={submitCallback}
              />
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};
export default Profile;
