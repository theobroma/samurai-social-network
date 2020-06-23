import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../../@components/LoginForm/LoginForm';

const MainApp: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          xs=12 md=8
        </Col>
        <Col xs={12} md={4}>
          <LoginForm />
        </Col>
        <Col xs={12} md={4}>
          xs=12 md=8
        </Col>
      </Row>
    </Container>
  );
};

export default MainApp;
