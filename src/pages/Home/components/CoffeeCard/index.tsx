import { useState } from 'react'
import {
  AddCartWrapper,
  CoffeeCardContainer,
  InputWrapper,
  Tags,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { FormatPrice } from '../../../../utils/formatPrice'

interface Coffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const formattedPrice = FormatPrice(coffee.price)

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
      <img src={`/public/coffees/${coffee.image}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <AddCartWrapper>
        <div>
          <small>R$</small> <span> {formattedPrice} </span>
        </div>
        <InputWrapper>
          <button type="button" onClick={handleDecrease}>
            <Minus size={14} />
          </button>
          <input type="number" value={quantity} readOnly />
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
