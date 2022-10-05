import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { InputAmount } from '../../../../components/InputAmount'
import { ButtonRemove, ItemCartContainer } from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { FormatPrice } from '../../../../utils/formatPrice'
import { CoffeeCartProps } from '../../../../reducers/cart/reducer'

interface ItemCartProps {
  coffee: CoffeeCartProps
}

export function ItemCart({ coffee }: ItemCartProps) {
  const [amount, setAmount] = useState(coffee.amount)

  const { updateCoffee, removeCoffee } = useContext(CartContext)

  const priceFormatted = FormatPrice(coffee.price)

  function handleIncrease() {
    setAmount((state) => state + 1)
    updateCoffee({ coffeeId: coffee.id, amount: amount + 1 })
  }

  function handleDecrease() {
    if (amount <= 1) {
      return
    }

    setAmount((state) => state - 1)
    updateCoffee({ coffeeId: coffee.id, amount: amount - 1 })
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }
  return (
    <ItemCartContainer>
      <img src={`coffees/${coffee.image}`} alt="" />
      <div>
        <span>{coffee.name}</span>
        <div>
          <InputAmount
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={amount}
          />
          <ButtonRemove type="button" onClick={handleRemoveCoffee}>
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </div>
      </div>
      <span>R$ {priceFormatted}</span>
    </ItemCartContainer>
  )
}
