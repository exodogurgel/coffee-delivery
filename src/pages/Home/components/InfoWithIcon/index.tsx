import { ReactNode } from 'react'
import { BACKGROUND_COLOR, InfoWithIconContainer } from './styles'

interface InfoProps {
  icon: ReactNode
  bgIcon: keyof typeof BACKGROUND_COLOR
  text: string
}

export function InfoWithIcon({ bgIcon, icon, text }: InfoProps) {
  return (
    <InfoWithIconContainer bgIcon={bgIcon}>
      <span>{icon}</span>
      <span>{text}</span>
    </InfoWithIconContainer>
  )
}
