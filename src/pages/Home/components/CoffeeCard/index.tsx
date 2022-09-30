import { useState } from 'react'
import { AddCartWrapper, CoffeeCardContainer, Tags } from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { FormatPrice } from '../../../../utils/formatPrice'
import { InputAmount } from '../../../../components/InputAmount'

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
        <InputAmount
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          quantity={quantity}
        />
        <button type="button" title="Adicionar ao carrinho">
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </AddCartWrapper>
    </CoffeeCardContainer>
  )
}
