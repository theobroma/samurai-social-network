import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { SubFooter } from './SubFooter';
import { SocialLink } from './SocialLink';

export const StyledFooter = styled.footer`
  background: #303b59;
`;

export const StyledSocialLinks = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = () => {
  const MainFooterBlock = (
    <Container>
      <Row>
        <Col md={8}>
          <StyledSocialLinks>
            <SocialLink
              link="https://www.linkedin.com/in/123123/"
              data-testid="linkedin-link"
              aria-label="Linkedin Link"
            >
              Linkedin
            </SocialLink>
            <SocialLink
              link="https://github.com/theobroma"
              data-testid="github-link"
              aria-label="Github Link"
            >
              Github
            </SocialLink>
          </StyledSocialLinks>
        </Col>
        <Col md={4}>
          <div className="d-none">col2</div>
        </Col>
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
