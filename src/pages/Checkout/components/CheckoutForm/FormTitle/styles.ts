import styled from 'styled-components'

interface FormTitleContainerProps {
  iconColor: 'yellow-700' | 'purple-500'
}

export const FormTitleContainer = styled.div<FormTitleContainerProps>`
  display: flex;
  gap: 0.5rem;
  line-height: 1.3;
  color: ${(props) => props.theme[`${props.iconColor}`]};

  span {
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
  }
`
