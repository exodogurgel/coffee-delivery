import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface CartContainerProps {
  items: number
}

export const HeaderContainer = styled.header`
  padding-block: 2rem;
  position: fixed;
  z-index: 999;
  right: 0;
  left: 0;
  padding-left: calc(50% - 35rem);
  padding-right: calc(50% - 35rem);
  max-width: 100%;

  background-color: ${(props) => props.theme['gray-100']};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
  }

  @media (max-width: 768px) {
    padding-inline: 2rem;
  }
`

export const Cart = styled(NavLink)<CartContainerProps>`
  padding: 0.5rem;
  position: relative;

  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    position: absolute;
    right: -0.52rem;
    top: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${(props) => props.theme['yellow-700']};
    border-radius: 9999px;

    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
