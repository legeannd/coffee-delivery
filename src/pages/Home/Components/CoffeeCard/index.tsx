import {
  AddToCartButton,
  CardContainer,
  CoffeeDetails,
  CoffeeTitle,
  CoffeeType,
  Price,
  PriceAndQuantityContainer,
} from './styles'

import traditionalCoffeeImg from '../../../../assets/traditional.png'
import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { QuantityInput } from '../../../../components/QuantityInput'

export function CoffeeCard() {
  const navigate = useNavigate()

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
          <QuantityInput color="purple" />
          <AddToCartButton onClick={handleNavigateToCheckout}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </PriceAndQuantityContainer>
    </CardContainer>
  )
}
