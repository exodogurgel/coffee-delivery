import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { InputAmount } from '../../../../components/InputAmount'
import { ButtonRemove, ItemCartContainer } from './styles'
import { CartContext, CoffeeCartProps } from '../../../../contexts/CartContext'
import { FormatPrice } from '../../../../utils/formatPrice'

interface ItemCartProps {
  coffee: CoffeeCartProps
}

export function ItemCart({ coffee }: ItemCartProps) {
  const [amount, setAmount] = useState(coffee.amount)

  const { updateCoffee } = useContext(CartContext)

  const priceFormatted = FormatPrice(coffee.price)

  function handleIncrease() {
    setAmount((state) => state + 1)
    updateCoffee({ coffeeId: coffee.id, amount })
  }

  function handleDecrease() {
    if (amount <= 1) {
      return
    }

    setAmount((state) => state - 1)
    updateCoffee({ coffeeId: coffee.id, amount })
  }
  return (
    <ItemCartContainer>
      <img src={`/public/coffees/${coffee.image}`} alt="" />
      <div>
        <span>{coffee.name}</span>
        <div>
          <InputAmount
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={amount}
          />
          <ButtonRemove type="button">
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </div>
      </div>
      <span>R$ {priceFormatted}</span>
    </ItemCartContainer>
  )
}
