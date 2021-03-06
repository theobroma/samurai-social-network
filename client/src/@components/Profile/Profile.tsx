import React, { useState } from 'react';
import {
  Col,
  Card,
  Row,
  Button,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { updateProfileAsync } from '../../@store/profile/actions';
import { ProfileType } from '../../@types';
import {
  ProfileStatus,
  ProfileData,
  ContactsData,
  ProfileDataForm,
} from './ProfileInfo';

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
  const [isEditing, setIsEditing] = useState(false);

  const submitCallback = (payload: any) => {
    dispatch(updateProfileAsync.request(payload));
    setIsEditing(false);
  };

  const cancelCallback = () => {
    setIsEditing(false);
  };

  const BlockTitle = (
    <div className="row mt-4 mb-3">
      <div className="col-12">
        <div className="option-subheading">Account Information</div>
      </div>
    </div>
  );

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit
    </Tooltip>
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
        {!isEditing ? (
          <>
            <Row>
              <Col md={10}>
                <ProfileData profile={profile} saveAvatar={saveAvatar} />
              </Col>
              <Col md={2}>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button
                    variant="outline-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    <BsPencilSquare />
                  </Button>
                </OverlayTrigger>
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
                cancelCallback={cancelCallback}
              />
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};
export default Profile;
