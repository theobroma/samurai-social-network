import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../@components/Header';
import Sidebar from '../@components/Sidebar/Sidebar';
import Footer from '../@components/Footer';

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
