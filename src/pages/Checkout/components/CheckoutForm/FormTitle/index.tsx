import { ReactNode } from 'react'
import { FormTitleContainer } from './styles'

interface FormTitleProps {
  icon: ReactNode
  iconColor: 'yellow-700' | 'purple-500'
  title: string
  description: string
}

export function FormTitle({
  icon,
  iconColor,
  title,
  description,
}: FormTitleProps) {
  return (
    <FormTitleContainer iconColor={iconColor}>
      <div>{icon}</div>
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </FormTitleContainer>
  )
}
