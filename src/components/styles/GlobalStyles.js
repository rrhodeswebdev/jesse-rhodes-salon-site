import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    font-family: 'Lato';
    box-sizing: border-box;
  }
  `;

export default GlobalStyles;
