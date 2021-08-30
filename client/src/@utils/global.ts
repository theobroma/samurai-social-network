import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  html {
    font-family: "Nunito Sans", 'Helvetica Neue', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
  }
`;
