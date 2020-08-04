import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../../@components/Header';
import Sidebar from '../../../@components/Sidebar/Sidebar';
import Footer from '../../../@components/Footer';

interface ILayout {
  // All other props
  [x: string]: any;
}

export const UserLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header className="mb-3" />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Sidebar />
          </Col>
          <Col xs={12} md={8}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const GuestLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
