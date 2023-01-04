import {
  AddToCartButton,
  CardContainer,
  CoffeeDetails,
  CoffeeTitle,
  CoffeeType,
  CoffeeTypeContainer,
  Price,
  PriceAndQuantityContainer,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { QuantityInput } from '../../../../components/QuantityInput'

interface CoffeeProps {
  id: string
  name: string
  description: string
  image_name: string
  labels: Array<string>
  price: string
}

interface CoffeeCardProps {
  coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const navigate = useNavigate()

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  const image = `/assets/coffees/${coffee.image_name}`

  return (
    <CardContainer>
      <img src={image} alt="" />
      <CoffeeTypeContainer>
        {coffee.labels.map((label) => (
          <CoffeeType key={label}>{label.toUpperCase()}</CoffeeType>
        ))}
      </CoffeeTypeContainer>
      <CoffeeTitle>{coffee.name}</CoffeeTitle>
      <CoffeeDetails>{coffee.description}</CoffeeDetails>
      <PriceAndQuantityContainer>
        <Price>
          <span>R$ </span> {coffee.price.replace('.', ',')}
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
