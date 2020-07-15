import React, { useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import classes from './Header.module.scss';
import { logoutAsync } from '../../@store/auth/actions';
import { getUserId } from '../../@store/auth/selectors';
import { getProfile } from '../../@store/profile/selectors';
import { fetchProfileAsync } from '../../@store/profile/actions';

const logo = require('../../@assets/images/logo.png'); // eslint-disable-line @typescript-eslint/no-var-requires

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  // No need to fetch profile cause of redirect to "profile" page after login where already "fetchProfileAsync.request"
  const profile = useSelector(getProfile);

  useEffect(() => {
    if (userId && !profile.userId) {
      dispatch(fetchProfileAsync.request(userId));
    }
  }, [dispatch, userId, profile.userId]);

  const DropdownTitleBlock = profile.userId ? (
    <Avatar
      name="Wim Mostmans"
      size="40"
      round
      src={
        profile.photos.large ||
        profile.photos.small ||
        'https://cdn2.hubspot.net/hubfs/2221797/cumulus2.jpg'
      }
    />
  ) : (
    ''
  );

  const NavbarBlock = (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title={DropdownTitleBlock} id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => dispatch(logoutAsync.request('any'))}
            >
              Logout
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  return (
    <Navbar expand="lg" className={`${classes.header} ${className}`}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className={classes.logo}>
            <img src={logo} alt="samurai-logo" />
          </NavLink>
        </Navbar.Brand>
        {userId && NavbarBlock}
      </Container>
    </Navbar>
  );
};

export default Header;
