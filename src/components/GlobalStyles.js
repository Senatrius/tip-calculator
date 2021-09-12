import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.8rem;
    background: ${props => props.theme.colors.bg};
    font-family: ${props => props.theme.fonts[1]}, ${props => props.theme.fonts[0]};
  }

  button, input, textarea {
    font-size: ${props => props.theme.fontSizes.inputs};
    font-family: inherit;
    font-weight: 700;
    box-sizing: border-box;
  }
`

export default GlobalStyle;