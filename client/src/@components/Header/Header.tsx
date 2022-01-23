import React, { useEffect } from 'react';
import { Form, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import classes from './Header.module.scss';
import { userIdSelector } from '../../@store/auth/selectors';
import { profileSelector } from '../../@store/profile/selectors';
import { themeSelector } from '../../@store/layout/selectors';
import { setTheme } from '../../@store/layout/slice';
import { NoAvatarSVG } from '../UI/SVG/NoAvatarSVG';
import logo from '../../@assets/images/logo.png';
import { logoutTC } from '../../@store/auth/slice';
import { getProfileTC } from '../../@store/profile/slice';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className = null }) => {
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  // No need to fetch profile cause of redirect to "profile" page after login where already "fetchProfileAsync.request"
  const profile = useSelector(profileSelector);
  const theme = useSelector(themeSelector);

  useEffect(() => {
    if (userId && !profile.userId) {
      dispatch(getProfileTC({ userId }));
    }
  }, [dispatch, userId, profile.userId]);

  // just for test
  // useEffect(() => {
  //   dispatch(setTheme('dark'));
  // }, [dispatch]);

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
    <NoAvatarSVG width="40px" />
  );

  const NavbarBlock = (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title={DropdownTitleBlock} id="basic-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/profile"
              className={classes.dropdownName}
            >
              {`Hi, ${profile.fullName} !`}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Night Mode
              {/* <Form>
                <Form.Group controlId="theme">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    onChange={() => dispatch(setTheme('dark'))}
                  />
                </Form.Group>
              </Form> */}
              <br />
              Current theme: {theme}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item onClick={() => dispatch(logoutAsync.request())}>
              Logout
            </NavDropdown.Item> */}
            <NavDropdown.Item onClick={() => dispatch(logoutTC())}>
              Logout
            </NavDropdown.Item>
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
