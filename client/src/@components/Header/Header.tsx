import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import classes from './Header.module.scss';

const logo = require('../../@assets/images/logo.png'); // eslint-disable-line @typescript-eslint/no-var-requires

// import AuthBoxContainer from './AuthBox/AuthBoxContainer';

const Header = () => {
  return (
    <Container
      fluid
      as="header"
      className={[classes.header, 'bg-dark d-flex align-items-center'].join(
        ' ',
      )}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <NavLink to="/" className={classes.logo}>
          <img src={logo} alt="samurai-logo" />
          <span>SamuraiNetworkJS</span>
        </NavLink>
        {/* <AuthBoxContainer /> */}
      </Container>
    </Container>
  );
};

export default Header;
