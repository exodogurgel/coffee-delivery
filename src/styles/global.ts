import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  } 

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
    overflow: overlay;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Baloo 2', cursive;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
