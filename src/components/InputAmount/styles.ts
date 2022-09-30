import styled from 'styled-components'

export const InputAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;
  height: 100%;

  position: relative;

  input {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme['gray-400']};
    border: none;
    border-radius: 6px;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    position: absolute;
    line-height: 0;
    border: none;
    background: transparent;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;

    transition: all 0.1s;
  }

  button:not(:disabled):hover {
    transform: scale(1.2);
    color: ${(props) => props.theme['purple-700']};
  }

  button:first-child {
    left: 0.5rem;
  }

  button:last-child {
    right: 0.5rem;
  }
`
