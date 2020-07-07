import styled from 'styled-components/macro';

export const StyledListUser = styled.div`
  border-bottom: 1px solid var(--steel_gray_80);
  .name {
    transition: color 0.15s ease-in-out;
    font-family: Roboto-Bold;
    font-size: 16px;
    color: #636363;
    &:hover {
      color: #fb6b33;
    }
  }
  .status {
    opacity: 0.5;
    color: #4a4a4a;
    font-family: Gothic A1, sans-serif !important;
  }
  .avatar-img {
    border: 2px solid transparent;
    &:hover {
      border: 2px solid #fb6b33;
    }
  }
`;

export default StyledListUser;
