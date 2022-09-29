import styled from 'styled-components'

export const BACKGROUND_COLOR = {
  yellow: 'yellow-500',
  yellowDark: 'yellow-700',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface InfoContainerProps {
  bgIcon: keyof typeof BACKGROUND_COLOR
}

export const InfoWithIconContainer = styled.div<InfoContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;

    background-color: ${(props) => props.theme[BACKGROUND_COLOR[props.bgIcon]]};
    color: ${(props) => props.theme['gray-100']};
    width: 2rem;
    height: 2rem;
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.3;
  }
`
