import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../@components/Footer';
import Header from '../@components/Header';
import Sidebar from '../@components/Sidebar/Sidebar';

export const UserLayout = () => {
  return (
    <>
      <Header className="mb-3" />
      <div className="HolyGrail-body">
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <nav>
                <Sidebar />
              </nav>
            </Col>
            <Col xs={12} lg={8}>
              <main>
                <Outlet />
              </main>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer className="mt-3" />
    </>
  );
};

export const GuestLayout = () => {
  return (
    <>
      <Header className="mb-3" />
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
      </div>
      <Footer className="mt-3" />
    </>
  );
};
