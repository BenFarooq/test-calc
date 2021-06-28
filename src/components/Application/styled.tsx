import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  #app {
    display: flex;
    height: 100%;

    justify-content: center;
    align-items: center
  }
`;
