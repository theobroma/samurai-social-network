import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { LoginPayload, startLoginProcess } from '../../@store/auth/sagas';
import LoginForm from '../@common/LoginForm/LoginForm';
import { StyledPageTitle } from './LoginForm.styled';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const callback = (payload: LoginPayload) => {
    dispatch(startLoginProcess(payload));
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <StyledPageTitle className="mb-3">Login Page</StyledPageTitle>
          <Alert variant="success" className="mb-5">
            <p>Данные тестового аккаунта:</p>
            <hr />
            <p>Email: free@samuraijs.com</p>
            <p className="mb-0">Password: free</p>
          </Alert>
          <LoginForm submitCallback={callback} />
        </Col>
      </Row>
    </Container>
  );
};
