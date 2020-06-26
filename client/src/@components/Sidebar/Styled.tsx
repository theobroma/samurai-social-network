import styled from 'styled-components';

export const StyledSideNav = styled.div`
  height: calc(100vh - 66px); /* minus navigation height */
  background-color: #fff;
  padding-top: 10px;
`;

export const StyledNavItem = styled.div`
  padding: 15px 15px 15px 15px;
  margin-bottom: 0;
  a {
    font-size: 1em;
    color: '#9FFFCB';
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
`;
