import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const StyledSubFooter = styled.div`
  background-color: #29334f;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const StyledCopyRight = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  color: #909192;
`;

interface Props {
  className?: string;
}

export const SubFooter: React.FC<Props> = () => {
  return (
    <StyledSubFooter>
      <Container>
        <Row>
          <Col md={8} className="mb-3">
            <StyledCopyRight>
              © created by Aleksandr Siryi {new Date().getFullYear()}
            </StyledCopyRight>
          </Col>
          <Col md={4} className="mb-3">
            <div className="d-none">col2</div>
          </Col>
        </Row>
      </Container>
    </StyledSubFooter>
  );
};

export default SubFooter;
