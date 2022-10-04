import { Border, SuccessContainer } from './styles'
import illustrationImage from '../../assets/illustration.png'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { AddressConfirmFormData } from '../Checkout'

export function Success() {
  const location = useLocation()
  const state = location.state as AddressConfirmFormData

  return (
    <SuccessContainer>
      <div>
        <h1>uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Border>
          <div>
            <InfoWithIcon
              text="Entrega em "
              address={`Rua ${state.road}, ${state.number}`}
              subtitle={`${state.neighborhood} - ${state.city}, ${state.uf}`}
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
              text="Pagamento na entrega"
              subtitle={state.payment}
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
