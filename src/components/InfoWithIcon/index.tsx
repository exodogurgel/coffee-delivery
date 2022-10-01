import { ReactNode } from 'react'
import { BACKGROUND_COLOR, InfoWithIconContainer, TextWrapper } from './styles'

interface InfoProps {
  icon: ReactNode
  bgIcon: keyof typeof BACKGROUND_COLOR
  text: string
  subtitle?: string
  address?: string
  textBold?: boolean
}

export function InfoWithIcon({
  bgIcon,
  icon,
  text,
  subtitle = '',
  address,
  textBold = false,
}: InfoProps) {
  return (
    <InfoWithIconContainer bgIcon={bgIcon}>
      <span>{icon}</span>
      <div>
        {subtitle.length > 1 ? (
          <TextWrapper>
            <span>
              {text}
              <b>{address}</b>
            </span>
            <p>{textBold ? <b>{subtitle}</b> : subtitle}</p>
          </TextWrapper>
        ) : (
          <span>{text}</span>
        )}
      </div>
    </InfoWithIconContainer>
  )
}
