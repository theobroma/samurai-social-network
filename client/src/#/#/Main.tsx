import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../@components/LoginForm/LoginForm';
import Header from '../../@components/Header/Header';
import {
  LoginPayload,
  startLoginProcess,
  startAuthenticationProcess,
} from '../../@store/auth/sagas';
import { getUserId } from '../../@store/auth/selectors';

const MainApp: React.FC = () => {
  const dispatch = useDispatch();

  const callback = (payload: LoginPayload) => {
    dispatch(startLoginProcess(payload));
  };

  const userId = useSelector(getUserId);

  useEffect(() => {
    dispatch(startAuthenticationProcess());
  }, [dispatch, userId]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            xs=12 md=8111
          </Col>
          <Col xs={12} md={4}>
            <LoginForm submitCallback={callback} />
          </Col>
          <Col xs={12} md={4}>
            xs=12 md=8
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainApp;
