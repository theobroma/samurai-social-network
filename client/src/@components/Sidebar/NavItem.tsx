import React from 'react';
import { NavLink } from 'react-router-dom';
import * as H from 'history';
import { StyledNavItem } from './Styled';

interface Props {
  path: H.LocationDescriptor;
}

const NavItem: React.FC<Props> = React.memo(({ path, children }) => {
  return (
    <StyledNavItem>
      <NavLink to={path} activeClassName="active">
        {children}
      </NavLink>
    </StyledNavItem>
  );
});

export default NavItem;
