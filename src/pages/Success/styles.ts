import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 11.5rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;

    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${(props) => props.theme['gray-800']};
  }

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const Border = styled.div`
  margin-top: 2.5rem;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  max-width: 32.875rem;
  height: 16.875rem;
  border-radius: 6px 36px;

  position: relative;

  > div {
    background-color: ${(props) => props.theme['gray-100']};
    position: absolute;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 6px 36px;
  }
`
