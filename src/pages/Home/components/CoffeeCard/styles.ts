import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 0 1.25rem 1.25rem;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 26px;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  strong {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-600']};
    margin-bottom: 2rem;
  }
`

export const Tags = styled.div`
  margin: 0.75rem 0 1rem;
  display: flex;
  gap: 0.25rem;

  > span {
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: bold;
    border-radius: 100px;

    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    text-transform: uppercase;
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    margin-right: 1rem;
  }

  > button:last-child {
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme['gray-100']};
    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.1s;
  }

  > button:not(:disabled):hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;
  height: 2.375rem;

  position: relative;

  input {
    width: 100%;
    height: 2.375rem;
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
