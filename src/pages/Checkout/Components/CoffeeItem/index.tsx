import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeProps } from '../../../Home/Components/CoffeeCard'
import {
  CoffeeImageAndNameContainer,
  CoffeeItemContainer,
  InnerPaddingContainer,
  RemoveButton,
} from './styles'

interface CoffeeItemProps {
  coffee: CoffeeProps
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { cartItems } = useContext(CartContext)

  const [{ amount }] = cartItems.filter((item) => item.id === coffee.id)

  const image = `/assets/coffees/${coffee.image_name}`

  return (
    <CoffeeItemContainer>
      <InnerPaddingContainer>
        <CoffeeImageAndNameContainer>
          <img src={image} alt="" />
          <div className="title-align">
            <span>{coffee.name}</span>
            <div>
              <QuantityInput quantity={amount} />
              <RemoveButton>
                <Trash size={16} />
                Remover
              </RemoveButton>
            </div>
          </div>
        </CoffeeImageAndNameContainer>
        <span>R$ {coffee.price.replace('.', ',')}</span>
      </InnerPaddingContainer>
    </CoffeeItemContainer>
  )
}
