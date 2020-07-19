import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import LoginForm from '../@common/LoginForm/LoginForm';
import { StyledPageTitle } from './LoginForm.styled';
import { getCaptchaUrl } from '../../@store/auth/selectors';
import { LoginPayload } from '../../@store/auth/types';
import { startLoginProcess } from '../../@store/auth/actions';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const captchaUrl = useSelector(getCaptchaUrl);

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
          <LoginForm submitCallback={callback} captchaUrl={captchaUrl} />
        </Col>
      </Row>
    </Container>
  );
};
