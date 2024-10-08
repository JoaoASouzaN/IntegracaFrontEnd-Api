import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f0f8ff; /* Um tom leve de azul */
    color: #000000; /* Preto */
  }

  h1 {
    color: #0000ff; /* Azul */
  }
`;

export default GlobalStyles;