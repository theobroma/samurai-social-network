import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { SubFooter } from './SubFooter';

export const StyledFooter = styled.footer`
  margin-top: 16px;
  background: #303b59;
`;

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = () => {
  const MainFooterBlock = (
    <Container>
      <Row>
        <Col md={8}>col1</Col>
        <Col md={4}>col2</Col>
      </Row>
    </Container>
  );

  return (
    <StyledFooter>
      {MainFooterBlock}
      <SubFooter />
    </StyledFooter>
  );
};

export default Footer;
