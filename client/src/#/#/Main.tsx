import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import LoginForm from '../../@components/LoginForm/LoginForm';
import Header from '../../@components/Header/Header';
import { LoginPayload, startLoginProcess } from '../../@store/auth/sagas';

const MainApp: React.FC = () => {
  const dispatch = useDispatch();
  const callback = (payload: LoginPayload) => {
    dispatch(startLoginProcess(payload));
  };
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            xs=12 md=8
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
