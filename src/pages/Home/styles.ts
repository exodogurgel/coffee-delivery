import styled from 'styled-components'

import backgroundImage from '../../assets/background.png'

export const HomeContainer = styled.main`
  margin-top: 6.5rem;
  padding-top: 5.875rem;
  display: flex;
  flex-direction: column;
`

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 34rem;
  top: 104px;
  right: 0;
  left: 0;

  @media (max-width: 767px) {
    height: 68rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.75rem;

  div {
    max-width: 588px;
    h1 {
      font-size: 3rem;
      font-weight: 800;
      line-height: 3.875rem;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 4.125rem;

      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`

export const Information = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;
`

export const Banner = styled.div`
  img {
    width: 100%;
  }
`

export const CoffeeMenu = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }
`
export const CoffeeList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    column-gap: 1rem;

    overflow-x: scroll;
  }
`
