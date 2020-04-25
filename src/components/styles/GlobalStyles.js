import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    font-family: 'Lato';
  }
`

export default GlobalStyles
