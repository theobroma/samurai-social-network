import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../@components/Header/Header';
import Sidebar from '../../@components/Sidebar/Sidebar';

const MainApp: React.FC = () => {
  return (
    <>
      {/* <Header />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Sidebar />
          </Col>
          <Col xs={12} md={4}>
            Content
          </Col>
          <Col xs={12} md={4}>
            xs=12 md=8
          </Col>
        </Row>
      </Container> */}
      Main Content
    </>
  );
};

export default MainApp;
