import { ItemCart } from '../ItemCart'
import {
  ItemsListContainer,
  OrderConfirm,
  OrderDetailsCheckoutContainer,
  TotalWrapper,
} from './styles'

export function OrderDetailsCheckout() {
  return (
    <OrderDetailsCheckoutContainer>
      <h2>Cafés selecionados</h2>
      <OrderConfirm>
        <ItemsListContainer>
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </ItemsListContainer>
        <TotalWrapper>
          <div>
            <small>Total de itens</small>
            <span>R$ 19,80</span>
          </div>
          <div>
            <small>Entrega</small>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 23,30</strong>
          </div>

          <button type="submit" form="address-form">
            Confirmar Pedido
          </button>
        </TotalWrapper>
      </OrderConfirm>
    </OrderDetailsCheckoutContainer>
  )
}
