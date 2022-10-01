import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-block: 9rem;
  display: flex;
  gap: 2rem;

  h2 {
    font-size: 1.125rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.div``

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;

    @media (max-width: 768px) {
      &:nth-child(4) {
        flex-direction: column;
      }
    }
  }
`

const BaseInput = styled.input`
  height: 2.625rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;

  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const SmallInput = styled(BaseInput)`
  width: 3.75rem;
`

export const MediumInput = styled(BaseInput)`
  width: 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const LargerInput = styled(BaseInput)`
  width: 100%;
`

export const OptionalInput = styled.div`
  position: relative;
  width: 100%;

  ::after {
    content: 'Opcional';
    font-style: italic;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    font-size: 0.75rem;
    transform: translateY(-50%);
    color: ${(props) => props.theme['gray-600']};
  }
`

export const PaymentMethodContainer = styled.div`
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
`

export const PaymentList = styled.ul`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  li {
    list-style: none;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-700']};
    width: 11.25rem;
    height: 3.125rem;
    border-radius: 6px;

    position: relative;

    transition: background-color 0.1s;

    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
    }

    label {
      font-size: 0.75rem;
      text-transform: uppercase;
      padding: 1rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      cursor: pointer;

      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }

    input {
      opacity: 0;

      &:checked + label {
        outline: 1px solid ${(props) => props.theme['purple-500']};
        background-color: ${(props) => props.theme['purple-300']};
        border-radius: 6px;
      }
    }
  }

  @media (max-width: 768px) {
    label {
      text-align: center;
    }
    svg {
      display: none;
    }
  }
`

export const OrderDetailsCheckout = styled.div`
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

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
