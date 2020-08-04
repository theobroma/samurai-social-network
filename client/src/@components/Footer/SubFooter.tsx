import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const StyledSubFooter = styled.div`
  background-color: #29334f;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

interface Props {
  className?: string;
}

export const SubFooter: React.FC<Props> = () => {
  return (
    <StyledSubFooter>
      {/* <div className="container">
        <div className="row py-3">
          <div className="col-lg-8 mb-3">links</div>
          <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end mb-3">
            app
          </div>
        </div>
      </div> */}
      <Container>
        <Row>
          <Col md={8} className="mb-3">
            col1
          </Col>
          <Col md={4} className="mb-3">
            col2
          </Col>
        </Row>
      </Container>
    </StyledSubFooter>
  );
};

export default SubFooter;
