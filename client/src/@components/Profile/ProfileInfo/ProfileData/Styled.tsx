import styled from 'styled-components';

export const StyledName = styled.div`
  font-size: 19px;
  line-height: 25px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--black);
  font-family: Gothic A1, sans-serif !important;
`;

export const StyledLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
  text-align: left;
  color: #4a4a4a;
  font-family: Gothic A1, sans-serif !important;
`;

export const StyledValue = styled.div`
  opacity: 0.5;
  color: #4a4a4a;
  font-family: Gothic A1, sans-serif !important;
`;

export const StyledSocialList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    color: #2d3748;
    &:hover {
      color: #2a5885;
      text-decoration: none;
    }
  }
`;
