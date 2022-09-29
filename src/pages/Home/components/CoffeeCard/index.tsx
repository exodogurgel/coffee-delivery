import { AddCartWrapper, CoffeeCardContainer, InputWrapper } from './styles'

import coffeeImage from '../../../../assets/type-americano.svg'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
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
          <button type="button">
            <Minus size={14} />
          </button>
          <input type="number" />
          <button type="button">
            <Plus size={14} />
          </button>
        </InputWrapper>
        <a href="">
          <ShoppingCartSimple size={22} weight="fill" />
        </a>
      </AddCartWrapper>
    </CoffeeCardContainer>
  )
}
