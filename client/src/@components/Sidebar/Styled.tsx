import styled from 'styled-components';

export const StyledSideNav = styled.div`
  /* minus navigation height */
  /* height: calc(100vh - 66px); */
  background-color: #fff;
  padding-top: 10px;
  margin-bottom: 16px;
`;

export const StyledNavItem = styled.div`
  padding: 15px 15px 15px 15px;
  margin-bottom: 0;
  a {
    color: #2a5885;
    font-size: 1em;
    &.active {
      color: #155724;
    }
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
`;
