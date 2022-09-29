import styled from 'styled-components'

export const Error404Container = styled.div`
  display: flex;

  div:first-child {
    max-width: 35rem;

    img {
      width: 100%;
    }
  }

  div:last-child {
    margin-top: 3.6rem;
    h1 {
      font-size: 10rem;
      line-height: 8rem;
      color: ${(props) => props.theme['purple-500']};
    }

    strong {
      font-size: 2.5rem;
      color: ${(props) => props.theme['yellow-700']};
    }

    p {
      margin-top: 3rem;
      font-size: 1.3rem;
      line-height: 2rem;
      color: ${(props) => props.theme['gray-700']};
    }

    a {
      margin-top: 2rem;
      display: block;
      width: fit-content;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      text-decoration: none;

      background: ${(props) => props.theme['yellow-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      text-transform: uppercase;

      transition: background-color 0.2s;

      &:hover {
        background: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`
