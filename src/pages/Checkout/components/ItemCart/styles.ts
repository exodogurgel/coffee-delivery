import styled from 'styled-components'

export const ItemCartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span:first-child {
      line-height: 1.3;
      color: ${(props) => props.theme['gray-800']};
    }
  }

  div > div {
    height: 2rem;
    display: flex;
    gap: 0.5rem;
  }

  span:last-child {
    font-weight: bold;
    color: ${(props) => props.theme['gray-700']};
    position: absolute;
    right: 0.25rem;
    top: 0.5rem;
  }
`

export const ButtonRemove = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']};
  width: 5.625rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-700']};

  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
