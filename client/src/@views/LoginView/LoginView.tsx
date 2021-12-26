import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import LoginForm from './LoginForm/LoginForm';
import { getCaptchaUrl } from '../../@store/auth/selectors';
import { LoginPayload } from '../../@store/auth/types';
import { loginTC } from '../../@store/auth/slice';

export const LoginView = () => {
  const dispatch = useDispatch();
  const captchaUrl = useSelector(getCaptchaUrl);

  const submitCallback = (payload: LoginPayload) => {
    dispatch(loginTC(payload));
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          <Alert variant="success" className="mb-5 mt-5">
            <p>Данные тестового аккаунта:</p>
            <hr />
            <p>Email: free@samuraijs.com</p>
            <p className="mb-0">Password: free</p>
          </Alert>
          <Card
            className="bg-white"
            style={{ border: '1px solid rgba(0,0,0,.125)' }}
          >
            <Card.Header>
              <div className="text-center">Login</div>
            </Card.Header>
            <Card.Body>
              <LoginForm
                submitCallback={submitCallback}
                captchaUrl={captchaUrl}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
