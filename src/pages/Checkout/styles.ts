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
