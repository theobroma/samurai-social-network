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
      <div className="HolyGrail-body">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <nav>
                <Sidebar />
              </nav>
            </Col>
            <Col xs={12} md={8}>
              <main>{children}</main>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export const GuestLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">{children}</main>
      </div>
      <Footer />
    </>
  );
};
