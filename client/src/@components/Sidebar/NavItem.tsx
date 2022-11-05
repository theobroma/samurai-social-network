import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledNavItem } from './Styled';

interface Props {
  path: string;
}

const NavItem: React.FC<Props> = React.memo(({ path, children }) => {
  return (
    <StyledNavItem>
      <NavLink to={path}>{children}</NavLink>
    </StyledNavItem>
  );
});

export default NavItem;
