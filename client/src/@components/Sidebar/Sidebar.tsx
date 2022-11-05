import React from 'react';
import {
  FaHome,
  FaMusic,
  FaRegComments,
  FaRegSun,
  FaRocketchat,
  FaUserCircle,
  FaUsers,
} from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import NavItem from './NavItem';
import { StyledSideNav } from './Styled';

const Sidebar: React.FC = React.memo(() => {
  return (
    <StyledSideNav>
      <NavItem path="/">
        <FaHome className="mr-3" />
        Home
      </NavItem>
      <NavItem path="/profile">
        <FaUserCircle className="mr-3" />
        Profile
      </NavItem>
      <NavItem path="/users">
        <FaUsers className="mr-3" />
        Users
      </NavItem>
      <NavItem path="/users-rtkq">
        <FaUsers className="mr-3" />
        Users RTKQ
      </NavItem>
      <NavItem path="/dialogs">
        <FaRegComments className="mr-3" />
        Messages
      </NavItem>
      <NavItem path="/music">
        <FaMusic className="mr-3" />
        Music
      </NavItem>
      <NavItem path="/settings">
        <FaRegSun className="mr-3" />
        Settings
      </NavItem>
      <NavItem path="/chat">
        <FaRocketchat className="mr-3" />
        Chat
      </NavItem>
      <NavItem path="/login">
        <FiLogIn className="mr-3" />
        Login
      </NavItem>
    </StyledSideNav>
  );
});

export default Sidebar;
