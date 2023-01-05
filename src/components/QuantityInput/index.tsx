import { Minus, Plus } from 'phosphor-react'
import { BaseSyntheticEvent, useState } from 'react'
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
  const [itemQuantity, setItemQuantity] = useState(quantity)

  function setParentAndComponentQuantity(value: number) {
    setItemQuantity(value)
    setQuantity(value)
  }

  function handleChangeQuantity(buttonType: string) {
    if (buttonType === 'minus' && itemQuantity > 0) {
      setParentAndComponentQuantity(itemQuantity - 1)
    } else if (buttonType === 'plus') {
      setParentAndComponentQuantity(itemQuantity + 1)
    }
  }

  function handleChangeQuantityFromInput(e: BaseSyntheticEvent) {
    if (e.target.value < 0) {
      setParentAndComponentQuantity(0)
    } else {
      setParentAndComponentQuantity(Number(e.target.value))
    }
  }

  return (
    <QuantityInputContainer color={color}>
      <button
        disabled={quantity === 0}
        onClick={() => handleChangeQuantity('minus')}
      >
        <Minus size={14} weight="fill" />
      </button>
      <input
        type="number"
        placeholder="1"
        id="quantity"
        value={itemQuantity}
        onChange={handleChangeQuantityFromInput}
      />
      <button onClick={() => handleChangeQuantity('plus')}>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityInputContainer>
  )
}
