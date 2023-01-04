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
import { QuantityInput } from '../../../../components/QuantityInput'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

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
  const [quantity, setQuantity] = useState(0)
  const { addItemToCart } = useContext(CartContext)

  const image = `/assets/coffees/${coffee.image_name}`

  function handleSetQuantity(quantity: number) {
    setQuantity(quantity)
  }

  function handleAddItemToCart() {
    const item = {
      id: coffee.id,
      amount: quantity,
    }

    addItemToCart(item)
  }

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
          <QuantityInput
            quantity={quantity}
            setQuantity={handleSetQuantity}
            color="purple"
          />
          <AddToCartButton
            disabled={quantity === 0}
            onClick={handleAddItemToCart}
          >
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </PriceAndQuantityContainer>
    </CardContainer>
  )
}
