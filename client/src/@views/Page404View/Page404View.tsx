import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

export const Page404View = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card
            className="bg-white"
            style={{ border: '1px solid rgba(0,0,0,.125)' }}
          >
            <Card.Body>
              <Row>
                <Col xs={12}>Not Found 404</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Page404View;
