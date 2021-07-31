import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.gray['200']};
    color: ${({ theme }) => theme.colors.gray['800']};
    font: 400 16px Roboto, sans-serif;
  }
`;
