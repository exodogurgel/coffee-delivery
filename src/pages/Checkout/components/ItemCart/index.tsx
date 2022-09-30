import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { InputAmount } from '../../../../components/InputAmount'
import { ButtonRemove, ItemCartContainer } from './styles'

export function ItemCart() {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity <= 1) {
      return
    }

    setQuantity((state) => state - 1)
  }
  return (
    <ItemCartContainer>
      <img src="/public/coffees/american.svg" alt="" />
      <div>
        <span>Expresso Tradicional</span>
        <div>
          <InputAmount
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={quantity}
          />
          <ButtonRemove type="button">
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </div>
      </div>
      <span>R$ 9,90</span>
    </ItemCartContainer>
  )
}
