import { Minus, Plus } from 'phosphor-react'
import { InputAmountContainer } from './styles'

interface InputAmountProps {
  handleDecrease: () => void
  handleIncrease: () => void
  quantity: number
}

export function InputAmount({
  handleDecrease,
  handleIncrease,
  quantity,
}: InputAmountProps) {
  return (
    <InputAmountContainer>
      <button type="button" onClick={handleDecrease}>
        <Minus size={14} />
      </button>
      <input type="number" value={quantity} readOnly />
      <button type="button" onClick={handleIncrease}>
        <Plus size={14} />
      </button>
    </InputAmountContainer>
  )
}
