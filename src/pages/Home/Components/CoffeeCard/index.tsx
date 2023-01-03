import {
  AddToCartButton,
  CardContainer,
  CoffeeDetails,
  CoffeeTitle,
  CoffeeType,
  Price,
  PriceAndQuantityContainer,
  QuantityInput,
} from './styles'

import traditionalCoffeeImg from '../../../../assets/traditional.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate()

  function handleChangeQuantity(buttonType: string) {
    if (buttonType === 'minus' && quantity > 0) {
      setQuantity(quantity - 1)
    } else if (buttonType === 'plus') {
      setQuantity(quantity + 1)
    }
  }

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  return (
    <CardContainer>
      <img src={traditionalCoffeeImg} alt="" />
      <CoffeeType>Tradicional</CoffeeType>
      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <CoffeeDetails>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDetails>
      <PriceAndQuantityContainer>
        <Price>
          <span>R$ </span> 9,90
        </Price>
        <div className="options">
          <QuantityInput>
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
              value={quantity}
            />
            <button onClick={() => handleChangeQuantity('plus')}>
              <Plus size={14} weight="fill" />
            </button>
          </QuantityInput>
          <AddToCartButton onClick={handleNavigateToCheckout}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </PriceAndQuantityContainer>
    </CardContainer>
  )
}
