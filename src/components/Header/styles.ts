import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0.5rem;
      border-radius: 6px;

      font-size: 0.875rem;
      background-color: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-700']};

      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`

export const Cart = styled(NavLink)`
  padding: 0.5rem;

  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`
