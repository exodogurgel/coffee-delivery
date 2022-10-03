import styled from 'styled-components'

export const OrderDetailsCheckoutContainer = styled.div`
  width: 28rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const OrderConfirm = styled.div`
  width: 100%;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;
`

export const ItemsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 18.4rem;
  overflow: auto;
`
export const TotalWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['gray-700']};
    display: flex;
    align-items: center;
    justify-content: space-between;

    > small {
      font-size: 0.875rem;
      line-height: 18px;
    }

    > strong {
      font-size: 1.25rem;
      font-family: 'Roboto', sans-serif;
    }
  }

  button {
    margin-top: 1.5rem;
    width: 100%;
    height: 2.875rem;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: bold;

    cursor: pointer;

    transition: background-color 0.1s;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['yellow-700']};
    }
  }
`
