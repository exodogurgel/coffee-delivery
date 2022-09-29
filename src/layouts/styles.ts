import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-inline: 2rem;
  }
`
