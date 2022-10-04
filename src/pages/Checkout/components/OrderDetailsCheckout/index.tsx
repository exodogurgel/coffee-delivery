import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { FormatPrice } from '../../../../utils/formatPrice'
import { ItemCart } from '../ItemCart'
import {
  ItemsListContainer,
  OrderConfirm,
  OrderDetailsCheckoutContainer,
  TotalWrapper,
} from './styles'

export function OrderDetailsCheckout() {
  const { cart } = useContext(CartContext)

  const cartTotal = cart.reduce((sumTotal, coffee) => {
    return sumTotal + coffee.price * coffee.amount
  }, 0)

  const cartTotalFormatted = FormatPrice(cartTotal)

  const deliveryFee = 3.5

  const total = FormatPrice(cartTotal + deliveryFee)

  return (
    <OrderDetailsCheckoutContainer>
      <h2>Cafés selecionados</h2>
      <OrderConfirm>
        <ItemsListContainer>
          {cart.map((item) => {
            return <ItemCart key={item.id} coffee={item} />
          })}
        </ItemsListContainer>
        <TotalWrapper>
          <div>
            <small>Total de itens</small>
            <span>R$ {cartTotalFormatted}</span>
          </div>
          <div>
            <small>Entrega</small>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ {total}</strong>
          </div>

          <button type="submit" form="address-form">
            Confirmar Pedido
          </button>
        </TotalWrapper>
      </OrderConfirm>
    </OrderDetailsCheckoutContainer>
  )
}
