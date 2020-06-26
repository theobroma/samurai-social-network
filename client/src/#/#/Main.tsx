import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../@components/Header/Header';
import Sidebar from '../../@components/Sidebar/Sidebar';
import { startAuthenticationProcess } from '../../@store/auth/sagas';
import { getUserId } from '../../@store/auth/selectors';

const MainApp: React.FC = () => {
  const dispatch = useDispatch();

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
            <Sidebar />
          </Col>
          <Col xs={12} md={4}>
            Content
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
