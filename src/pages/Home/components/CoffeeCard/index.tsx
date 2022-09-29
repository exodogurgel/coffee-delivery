import { useState } from 'react'
import { AddCartWrapper, CoffeeCardContainer, InputWrapper } from './styles'

import coffeeImage from '../../../../assets/type-americano.svg'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
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
    <CoffeeCardContainer>
      <img src={coffeeImage} alt="" />
      <span>Tradicional</span>
      <strong>Expresso Tradicional</strong>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <AddCartWrapper>
        <div>
          <small>R$</small> <span> 9,80 </span>
        </div>
        <InputWrapper>
          <button type="button" onClick={handleDecrease}>
            <Minus size={14} />
          </button>
          <input type="number" value={quantity} />
          <button type="button" onClick={handleIncrease}>
            <Plus size={14} />
          </button>
        </InputWrapper>
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </AddCartWrapper>
    </CoffeeCardContainer>
  )
}
