import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LoginPayload, startLoginProcess } from '../../@store/auth/sagas';
import LoginForm from '../@common/LoginForm/LoginForm';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const callback = (payload: LoginPayload) => {
    dispatch(startLoginProcess(payload));
  };

  return (
    <Row className="mt-3">
      <Col xs={12} md={{ span: 4, offset: 4 }}>
        <LoginForm submitCallback={callback} />
      </Col>
    </Row>
  );
};
