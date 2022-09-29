import styled from 'styled-components'

import backgroundImage from '../../assets/background.png'

export const HomeContainer = styled.main`
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
`

export const Information = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;
`

const BACKGROUND_COLOR = {
  yellow: 'yellow-500',
  yellowDark: 'yellow-700',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface InfoProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;

    background-color: ${(props) =>
      props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
    color: ${(props) => props.theme['gray-100']};
    width: 2rem;
    height: 2rem;
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.3;
  }
`

export const Banner = styled.div``

export const CoffeeMenu = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
`
