import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  FaHome,
  FaRegComments,
  FaUsers,
  FaMusic,
  FaRegSun,
} from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import { StyledSideNav } from './Styled';
import NavItem from './NavItem';

const Sidebar: React.FC = React.memo(() => {
  const BlockList = (
    <ListGroup as="ul" className="my-4">
      <ListGroup.Item as="li" active>
        Cras justo odio
      </ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
  return (
    <>
      {/* {BlockList} */}
      <StyledSideNav>
        <NavItem path="/profile">
          <FaHome className="mr-3" />
          Profile
        </NavItem>
        <NavItem path="/dialogs">
          <FaRegComments className="mr-3" />
          Messages
        </NavItem>
        <NavItem path="/users">
          <FaUsers className="mr-3" />
          Users
        </NavItem>
        <NavItem path="/music">
          <FaMusic className="mr-3" />
          Music
        </NavItem>
        <NavItem path="/settings">
          <FaRegSun className="mr-3" />
          Settings
        </NavItem>
        <NavItem path="/login">
          <FiLogIn className="mr-3" />
          Login
        </NavItem>
      </StyledSideNav>
    </>
  );
});

export default Sidebar;
