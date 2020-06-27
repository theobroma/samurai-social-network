import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

export const LoadingPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
            <Spinner animation="grow" variant="warning" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoadingPage;
