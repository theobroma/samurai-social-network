import styled from 'styled-components/macro';

export const StyledGridUser = styled.div`
  .name {
    transition: color 0.15s ease-in-out;
  }

  .name {
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    color: #636363;
  }
  .avatar-img {
    border: 2px solid transparent;
  }
  &:hover {
    .avatar-img {
      border: 2px solid #fb6b33;
    }
    .name {
      color: #fb6b33;
    }
  }
`;

export default StyledGridUser;
