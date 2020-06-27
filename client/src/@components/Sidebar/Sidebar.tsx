import React from 'react';
import { StyledSideNav } from './Styled';
import NavItem from './NavItem';

const Sidebar: React.FC = React.memo(() => {
  return (
    <StyledSideNav>
      <NavItem path="/profile">Profile</NavItem>
      <NavItem path="/dialogs">Messages</NavItem>
      <NavItem path="/users">Users</NavItem>
      <NavItem path="/music">Music</NavItem>
      <NavItem path="/settings">Settings</NavItem>
      <NavItem path="/login">Login</NavItem>
    </StyledSideNav>
  );
});

export default Sidebar;
