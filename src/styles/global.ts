import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
  // this is the default value below
  --toastify-color-light: ${(props) => props.theme['purple-300']};
  --toastify-icon-color-success: ${(props) => props.theme['purple-700']};
  --toastify-color-progress-success: ${(props) => props.theme['purple-700']};
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

    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['gray-500']};
    }
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
