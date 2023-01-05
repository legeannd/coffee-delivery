import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  color?: 'purple' | 'default'
  quantity: number
  setQuantity: (value: number) => void
}

export function QuantityInput({
  color = 'default',
  quantity = 0,
  setQuantity,
}: QuantityInputProps) {
  function handleChangeQuantity(buttonType: string) {
    if (buttonType === 'minus' && quantity > 0) {
      setQuantity(quantity - 1)
    } else if (buttonType === 'plus') {
      setQuantity(quantity + 1)
    }
  }

  console.log(quantity)

  return (
    <QuantityInputContainer color={color}>
      <button
        disabled={quantity === 0}
        onClick={() => handleChangeQuantity('minus')}
      >
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" placeholder="1" id="quantity" value={quantity} />
      <button onClick={() => handleChangeQuantity('plus')}>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityInputContainer>
  )
}
