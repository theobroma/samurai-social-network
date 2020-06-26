import React from 'react';
import { StyledSideNav } from './Styled';
import NavItem from './NavItem';

interface Props {
  path?: any;
  onItemClick?: any;
  active?: any;
  css?: any;
}

const Sidebar: React.FC<Props> = React.memo(() => {
  return (
    <StyledSideNav>
      <NavItem path="/profile">Profile</NavItem>
      <NavItem path="/dialogs">Messages</NavItem>
      <NavItem path="/users">Users</NavItem>
      <NavItem path="/music">Music</NavItem>
      <NavItem path="/settings">Settings</NavItem>
    </StyledSideNav>
  );
});

export default Sidebar;
