import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInputContainer } from './styles'

export function QuantityInput() {
  const [quantity, setQuantity] = useState(0)

  function handleChangeQuantity(buttonType: string) {
    if (buttonType === 'minus' && quantity > 0) {
      setQuantity(quantity - 1)
    } else if (buttonType === 'plus') {
      setQuantity(quantity + 1)
    }
  }
  return (
    <QuantityInputContainer>
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
