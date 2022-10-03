import { useContext, useState } from 'react'
import { AddCartWrapper, CoffeeCardContainer, Tags } from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { FormatPrice } from '../../../../utils/formatPrice'
import { InputAmount } from '../../../../components/InputAmount'
import { CartContext, Coffee } from '../../../../contexts/CartContext'

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffee } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  function handleIncrease() {
    setAmount((state) => state + 1)
  }

  function handleDecrease() {
    if (amount <= 1) {
      return
    }

    setAmount((state) => state - 1)
  }

  const formattedPrice = FormatPrice(coffee.price)

  function handleAddCoffeeToCart() {
    addCoffee({ coffee, amount })
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
          quantity={amount}
        />
        <button
          type="button"
          title="Adicionar ao carrinho"
          onClick={handleAddCoffeeToCart}
        >
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </AddCartWrapper>
    </CoffeeCardContainer>
  )
}
