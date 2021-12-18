import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

export const NotFoundPage: React.FC = () => {
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
