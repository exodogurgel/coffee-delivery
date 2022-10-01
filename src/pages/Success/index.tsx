import { Border, SuccessContainer } from './styles'

import illustrationImage from '../../assets/illustration.png'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Border>
          <div>
            <InfoWithIcon
              text="Entrega em "
              address="Rua João Daniel Martinelli, 101"
              subtitle="Farrapos - Porto Alegre, RS"
              bgIcon="purple"
              icon={<MapPin />}
            />

            <InfoWithIcon
              text="Previsão de entrega"
              subtitle="20 min - 30 min"
              bgIcon="yellow"
              icon={<Timer />}
              textBold
            />

            <InfoWithIcon
              text="Pagamento na entrada"
              subtitle="Cartão de Crédito"
              bgIcon="yellowDark"
              icon={<CurrencyDollar />}
              textBold
            />
          </div>
        </Border>
      </div>
      <div>
        <img src={illustrationImage} alt="" />
      </div>
    </SuccessContainer>
  )
}
