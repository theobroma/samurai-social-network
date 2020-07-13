import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss';
import { logoutAsync } from '../../@store/auth/actions';
import { getUserId } from '../../@store/auth/selectors';

const logo = require('../../@assets/images/logo.png'); // eslint-disable-line @typescript-eslint/no-var-requires

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  return (
    <Navbar expand="lg" className={classes.header}>
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/" className={classes.logo}>
            <img src={logo} alt="samurai-logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {!userId ? (
                <NavDropdown.Item as={NavLink} to="/login">
                  Login
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item
                  onClick={() => dispatch(logoutAsync.request('any'))}
                >
                  Logout
                </NavDropdown.Item>
              )}
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
