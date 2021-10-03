import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { ImGithub } from 'react-icons/im';
import { FaLinkedin } from 'react-icons/fa';
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
        <Col xs={12} className="my-3">
          <StyledSocialLinks>
            <SocialLink
              link="https://www.linkedin.com/in/olexandr-siryj-39852a99"
              data-testid="linkedin-link"
              aria-label="Linkedin Link"
            >
              <FaLinkedin />
              Linkedin
            </SocialLink>
            <SocialLink
              link="https://github.com/theobroma"
              data-testid="github-link"
              aria-label="Github Link"
            >
              <ImGithub />
              Github
            </SocialLink>
          </StyledSocialLinks>
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
